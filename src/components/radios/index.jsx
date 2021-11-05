import React from 'react';

import { Radio } from 'antd';

export default () => (
  <>
    <Radio.Group className="sort-radios" buttonStyle="solid">
      <Radio.Button className="sort-radios__button" value="created">
        New
      </Radio.Button>
      <Radio.Button className="sort-radios__button" value="updated">
        Updated
      </Radio.Button>
    </Radio.Group>
  </>
);
