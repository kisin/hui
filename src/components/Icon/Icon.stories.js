import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon, Grid } from '../../index';

const icons = [
  'ambulance',
  'analysis',
  'analytics',
  'angle-double-down',
  'angle-double-left',
  'angle-double-right',
  'angle-double-up',
  'angle-down',
  'angle-left',
  'angle-right-b',
  'angle-right',
  'angle-up',
  'apps',
  'archive',
  'arrow-circle-down',
  'arrow-circle-left',
  'arrow-circle-right',
  'arrow-circle-up',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-down',
  'arrow-from-right',
  'arrow-from-top',
  'arrow-growth',
  'arrow-left',
  'arrow-random',
  'arrow-resize-diagonal',
  'arrow-right',
  'arrow-to-bottom',
  'arrow-to-right',
  'arrow-up-left',
  'arrow-up-right',
  'arrow-up',
  'arrows-h-alt',
  'arrows-h',
  'arrows-maximize',
  'arrows-v',
  'at',
  'atm-card',
  'award',
  'baby-carriage',
  'backpack',
  'backspace',
  'backward',
  'bag',
  'bars',
  'basketball',
  'battery-bolt',
  'battery-empty',
  'bed',
  'bell',
  'bell-slash',
  'bitcoin',
  'bluetooth-b',
  'bolt',
  'bolt-slash',
  'book',
  'bookmark',
  'box',
  'briefcase',
  'building',
  'calcualtor',
  'calculator-alt',
  'calender',
  'calendar-slash',
  'calling',
  'camera',
  'cancel',
  'capsule',
  'car-sideview',
  'car-slash',
  'car-wash',
  'car',
  'cart',
  'chart-down',
  'chart-bar',
  'chart-line',
  'chart-pie',
  'chart',
  'chat-bubble-user',
  'chat',
  'check-circle',
  'check',
  'circle',
  'clipboard',
  'clipboard-notes',
  'clock',
  'cloud-download',
  'cloud',
  'cloud-upload',
  'code',
  'coffee',
  'cog',
  'coins',
  'comment-alt',
  'comment',
  'comment-slash',
  'comment-alt-slash',
  'compact-disc',
  'copy',
  'crockery',
  'database',
  'cube',
  'desktop',
  'desktop-slash',
  'diary',
  'direction',
  'down-arrow',
  'dollar-sign',
  'document',
  'entry',
  'ellipsis-v',
  'ellipsis-h',
  'edit',
  'envelope',
  'euro',
  'exclamation-triangle',
  'exclamation-circle',
  'exit',
  'eye',
  'eye-slash',
  'external-link-alt',
  'export',
  'file-blank',
  'file-alt',
  'favorite',
  'file-download',
  'file-check',
  'file-minus',
  'file-medical-alt',
  'file-question',
  'filter',
  'filter-slash',
  'film',
  'file',
  'file-upload',
  'file-times',
  'flask',
  'folder-plus',
  'folder-minus',
  'folder-network',
  'folder-lock',
  'folder-info',
  'folder-download',
  'folder-check',
  'food',
  'folder',
  'folder-upload',
  'folder-times',
  'folder-slash',
  'folder-question',
  'glass-tea',
  'frown',
  'game',
  'gift',
  'graduation-hat',
  'globe',
  'heart',
  'heart-rate',
  'headphones',
  'grin',
  'home',
  'history',
  'heartbeat',
  'image-minus',
  'image-lock',
  'image-edit',
  'image-download',
  'image-check',
  'image-broken',
  'image-alt-slash',
  'image-times',
  'image-slash',
  'image-plus',
  'invoice',
  'info-circle',
  'image',
  'image-upload',
  'keyboard',
  'key-skeleton',
  'laptop',
  'label',
  'left-arrow-to-left',
  'left-arrow-from-left',
  'layers',
  'layers-slash',
  'link',
  'link-broken',
  'lightbulb',
  'lock-open-alt',
  'lock-alt',
  'location',
  'location-point',
  'location-arrow',
  'list-ul',
  'mailbox',
  'lock',
  'lock-slash',
  'medical-drip',
  'medal',
  'mars',
  'map',
  'map-marker',
  'map-marker-slash',
  'message',
  'microphone-slash',
  'meh',
  'meeting-board',
  'medkit',
  'medical',
  'mobile-android',
  'minus',
  'minus-square',
  'minus-circle',
  'microphone',
  'moneybag',
  'money-withdraw',
  'money-insert',
  'money-bill',
  'multiply',
  'mouse',
  'mountains',
  'moon',
  'monitor',
  'no-entry',
  'newspaper',
  'music',
  'paint-tool',
  'notes',
  'pause-circle',
  'parking-square',
  'paperclip',
  'phone',
  'phone-slash',
  'phone-times',
  'pen',
  'plus',
  'plus-square',
  'plus-circle',
  'play',
  'play-circle',
  'plane',
  'presentation-line',
  'power',
  'pound',
  'postcard',
  'print',
  'print-slash',
  'presentation',
  'rainbow',
  'question-circle',
  'repeat',
  'redo',
  'rss',
  'search-minus',
  'scroll',
  'scroll-h',
  'search-plus',
  'search',
  'server',
  'shield',
  'shield-slash',
  'shield-check',
  'shield-question',
  'shield-exclamation',
  'ship',
  'shop',
  'share-alt',
  'shopping-trolley',
  'shovel',
  'sitemap',
  'signal',
  'sliders-v-alt',
  'sorting',
  'sort',
  'snowflake',
  'store',
  'stopwatch',
  'stopwatch-slash',
  'sun',
  'syringe',
  'swimmer',
  'temperature',
  'times-circle',
  'thumbs-up',
  'thumbs-down',
  'times',
  'times-square',
  'truck',
  'trophy',
  'trash-alt',
  'umbrella',
  'tv-retro',
  'user-square',
  'user-plus',
  'user-minus',
  'user-exclamation',
  'user-check',
  'user-times',
  'users-alt',
  'user',
  'video',
  'video-slash',
  'volume',
  'volume-off',
  'volume-mute',
  'volume-down',
  'whatsapp',
  'weight',
  'webcam',
  'water',
  'wifi',
  'wifi-slash',
  'wheelchair',
  'youtube',
  'yen',
  'wrench',
  'window'
];

const Box = (props) => (
  <div style={{
    padding: '20px 0',
    border: '1px solid #eee',
    width: '100%',
    borderRadius: '4px'
  }}>
    {props.children}
    <div style={{
      paddingTop: '20px'
    }}>{props.title}</div>
  </div>
)


storiesOf('Icon', module)
  .add('default', () => (
    <Grid col={2}>
      {icons.map((icon, i) => <Grid.Column style={{textAlign: 'center'}} key={i}><Box title={icon}><Icon name={icon} size="large" /></Box></Grid.Column>)}
    </Grid>
  ))
  .add('as image', () => (
    <Grid col={2}>
      {icons.map((icon, i) => <Grid.Column style={{textAlign: 'center'}} key={i}><Box title={icon}><Icon name={icon} type="image" size="large" /></Box></Grid.Column>)}
    </Grid>
  ))
  .add('size', () => (
    <Grid col={2}>
      <Grid.Column style={{textAlign: 'center'}}><Box title="small"><Icon name="phone" size="small" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="medium"><Icon name="phone" size="medium" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="large"><Icon name="phone" size="large" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="xlarge"><Icon name="phone" size="xlarge" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="xxlarge"><Icon name="phone" size="xxlarge" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="140px"><Icon name="phone" size="140px" /></Box></Grid.Column>
    </Grid>
  ))
  .add('color', () => (
    <Grid col={2}>
      <Grid.Column style={{textAlign: 'center'}}><Box title="success"><Icon name="phone" size="large" color="success" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="danger"><Icon name="phone" size="large" color="danger" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="link"><Icon name="phone" size="large" color="link" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="primary1"><Icon name="phone" size="large" color="primary1" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="primary2"><Icon name="phone" size="large" color="primary2" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="primary3"><Icon name="phone" size="large" color="primary3" /></Box></Grid.Column>
      <Grid.Column style={{textAlign: 'center'}}><Box title="primary4"><Icon name="phone" size="large" color="primary4" /></Box></Grid.Column>
    </Grid>
  ))
