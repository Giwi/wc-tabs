import {Component, Prop, Method, Event, EventEmitter, State, h} from '@stencil/core';
import {IWcTabHeaderData} from "../../utils/model";
import {Utils} from "../../utils/utils";

@Component({
  tag: 'wc-tabs-header',
  styleUrl: 'wc-tabs-header.scss',
  shadow: true
})
export class StcTabHeader {

  private id: string = Utils.generateId();

  @Prop() name: string;
  @Prop() disabled: boolean;

  @Event() tabSelect: EventEmitter;

  @State() isSelected: boolean = false;

  @Method()
  async getChild(): Promise<IWcTabHeaderData> {
    return new Promise<IWcTabHeaderData>(resolve => resolve({
      select: this.handleSelect.bind(this),
      unselect: this.unselect.bind(this),
      name: this.name,
      id: this.id
    }));
  }

  /**
   *
   */
  unselect() {
    this.isSelected = false;
  }

  /**
   *
   */
  handleSelect() {
    this.isSelected = true;
  }

  /**
   *
   */
  onClick() {
    if (!this.disabled) {
      this.getChild().then(child => this.tabSelect.emit(child));
    }
  }

  render() {
    const classes = {
      'wc-tab-header': true,
      'wc-tab-header-selected': this.isSelected,
      'wc-tab-header-disabled': this.disabled,
    };

    // noinspection JSXNamespaceValidation
    return <div class={classes} onClick={this.onClick.bind(this)}>
      <slot/>
    </div>;
  }
}
