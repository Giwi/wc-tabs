import {Component, Prop, Method, State, h} from '@stencil/core';
import {IWcTabContentData} from "../../utils/model";


@Component({
  tag: 'wc-tabs-content',
  styleUrl: 'wc-tabs-content.scss',
  shadow: false
})
export class StcTabContent {

  @Prop() name: string;
  @Prop() responsive: boolean = false;

  @State() isSelected: boolean = false;

  /**
   *
   * @returns {Promise<IWcTabContentData>}
   */
  @Method()
  async getChild(): Promise<IWcTabContentData> {
    return new Promise<IWcTabContentData>(resolve => resolve({
      select: this.select.bind(this),
      unselect: this.unselect.bind(this),
      name: this.name
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
  select() {
    this.isSelected = true;
  }

  render() {
    const classes = {
      'wc-tab-content': true,
      'wc-tab-content-selected': this.isSelected,
      'wc-tab-content-responsive':this.responsive
    };

    return (
      <div class={classes}>
        <slot/>
      </div>
    );
  }
}
