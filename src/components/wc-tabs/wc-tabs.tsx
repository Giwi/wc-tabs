import {Component, Element, Listen} from "@stencil/core";
import {IWcTabContentData, IWcTabHeaderData} from "../../utils/model";
import {Components} from "../../components";
import WcTabsHeader = Components.WcTabsHeader;
import WcTabsContent = Components.WcTabsContent;

interface ITabGroup {
  header: IWcTabHeaderData;
  content: IWcTabContentData;
}

@Component({
  tag: 'wc-tabs',
  styleUrl: 'wc-tabs.scss',
  shadow: true
})
export class WCTabs {
  tabsHeader: IWcTabHeaderData[];
  tabsContent: IWcTabContentData[];
  tabGroup: ITabGroup[];

  @Element() host: HTMLElement;

  // noinspection JSUnusedGlobalSymbols
  componentDidLoad() {
    this.createGroup().then(() => {
      const [group] = this.tabGroup;
      this.selectGroup(group);
    });
  }

  @Listen('onSelect')
  onSelectedTab(event: CustomEvent) {
    const group = this.tabGroup.find(group => group.header.id === event.detail.id);
    console.debug(group, event.detail)
    this.selectGroup(group);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  createGroup(): Promise<void> {
    return new Promise<void>(resolve => {
      this.tabsHeader = [];
      this.tabsContent = [];
      const headers: Promise<IWcTabHeaderData>[] = [];
      const contents: Promise<IWcTabContentData>[] = [];
      const tabsHeaderEl = Array.from(this.host.querySelectorAll('wc-tabs-header')) as WcTabsHeader[];
      tabsHeaderEl.map(el => headers.push(el.getChild()));
      const tabsContentEl = Array.from(this.host.querySelectorAll('wc-tabs-content')) as WcTabsContent[];
      tabsContentEl.map(el => contents.push(el.getChild()));
      Promise.all(headers).then(rh => {
        rh.map(h => this.tabsHeader.push(h));
        Promise.all(contents).then(rc => {
          rc.map(c => this.tabsContent.push(c));
          this.tabGroup = this.tabsHeader.map(header => {
            const content = this.tabsContent.find(content => content.name === header.name);
            return {
              header: header,
              content: content
            };
          });
          resolve();
        });
      });
    });
  }

  /**
   *
   * @param {ITabGroup} group
   */
  selectGroup(group: ITabGroup) {
    this.tabGroup.forEach(t => {
      t.header.unselect();
      t.content.unselect();
    });
    group.header.select();
    group.content.select();
  }

  render() {
    // noinspection JSXNamespaceValidation
    return [
      <div class="wc-tabs-header">
        <slot name="header"/>
      </div>,
      <div class="wc-tabs-content">
        <slot name="content"/>
      </div>
    ];
  }
}
