# 基本用法

* order: 0

---

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Component from '@ali/ascp-comp-vendor-saas-jkb-user-moneny';
import { createClient } from '@ali/alivebase-client';
import '@ali/ascp-shared-exception-ui-next/index'; // 注入exception的UI
import Configurator from '@ali/ascp-fe-ascp-configurator';
import jsonSchema from '../schema.json';

createClient({
  appId: 'ascpQueryListScene',
  appKey: 'fgW8VZOi31qQWx/KXf9bew==',
  appGroup: 'ascpQueryListScene',
  env: 'daily'
});

// 配置器默认值
const initialValues = {
  smallPoolId: 123,
}

const defaultConfig = {
  jsonSchema,
}

function Root(props) {
  const [config, setConfig] = useState(defaultConfig)
  useEffect(() => {
    Configurator.init({
      config: defaultConfig,
      initialValues,
      onChange: (config) => {
        setConfig({...config})
      },
    })
  }, [setConfig])
  return <Component {...props} {...config} />
}

ReactDOM.render(<Root />, mountNode);
```


