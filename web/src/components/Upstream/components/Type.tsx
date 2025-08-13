/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { FormInstance } from 'antd';
import { AutoComplete, Form, Input, Select, Space, Button, Tag } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'umi';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { AlgorithmEnum, CommonHashKeyEnum, HashOnEnum } from '../constant';

type Props = {
  readonly?: boolean;
  form: FormInstance;
};

const CHash: React.FC<Props> = ({ form, readonly }) => {
  const { formatMessage } = useIntl();
  const [keySearchWord, setKeySearchWord] = useState('');

  const handleSearch = (search: string) => {
    setKeySearchWord(search);
  };
  return (
    <React.Fragment>
      <Form.Item
        name="hash_on"
        rules={[{ required: true }]}
        label={formatMessage({ id: 'component.upstream.fields.hash_on' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.hash_on.tooltip' })}
        initialValue="vars"
      >
        <Select disabled={readonly}>
          {Object.entries(HashOnEnum).map(([label, value]) => (
            <Select.Option value={value} key={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {form.getFieldValue('hash_on') !== 'consumer' && (
        <Form.Item
          name="key"
          rules={[{ required: true }]}
          label={formatMessage({ id: 'component.upstream.fields.key' })}
          tooltip={formatMessage({ id: 'component.upstream.fields.key.tooltip' })}
          initialValue="remote_addr"
        >
          <AutoComplete disabled={readonly} onSearch={handleSearch}>
            {Object.entries(CommonHashKeyEnum)
              .filter(
                ([label, value]) =>
                  label.startsWith(keySearchWord) || value.startsWith(keySearchWord),
              )
              .map(([label, value]) => (
                <Select.Option value={value} key={value}>
                  {label}
                </Select.Option>
              ))}
          </AutoComplete>
        </Form.Item>
      )}
    </React.Fragment>
  );
};

const Subset: React.FC<Props> = ({ form, readonly }) => {
  const { formatMessage } = useIntl();

  const fallbackPolicyOptions = [
    {
      label: formatMessage({ id: 'component.upstream.fields.subset.fallback_policy.no_fallback' }),
      value: 'NO_FALLBACK'
    },
    {
      label: formatMessage({ id: 'component.upstream.fields.subset.fallback_policy.any_endpoint' }),
      value: 'ANY_ENDPOINT'
    },
    {
      label: formatMessage({ id: 'component.upstream.fields.subset.fallback_policy.default_subset' }),
      value: 'DEFAULT_SUBSET'
    }
  ];

  const lbTypeOptions = [
    {
      label: formatMessage({ id: 'page.upstream.type.roundrobin' }),
      value: 'roundrobin'
    },
    {
      label: formatMessage({ id: 'page.upstream.type.least_conn' }),
      value: 'least_conn'
    },
    {
      label: formatMessage({ id: 'page.upstream.type.random' }),
      value: 'random'
    }
  ];

  return (
    <React.Fragment>
      {/* Fallback Policy */}
      <Form.Item
        name={['subset', 'fallback_policy']}
        label={formatMessage({ id: 'component.upstream.fields.subset.fallback_policy' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.subset.fallback_policy.tooltip' })}
        initialValue="NO_FALLBACK"
      >
        <Select disabled={readonly} options={fallbackPolicyOptions} />
      </Form.Item>

      {/* Header Prefix */}
      <Form.Item
        name={['subset', 'header_prefix']}
        label={formatMessage({ id: 'component.upstream.fields.subset.header_prefix' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.subset.header_prefix.tooltip' })}
        initialValue=""
      >
        <Input disabled={readonly} placeholder={formatMessage({ id: 'component.upstream.fields.subset.header_prefix.placeholder' })} />
      </Form.Item>

      {/* Load Balancer Type for subsets */}
      <Form.Item
        name={['subset', 'type']}
        label={formatMessage({ id: 'component.upstream.fields.subset.lb_type' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.subset.lb_type.tooltip' })}
        initialValue="roundrobin"
      >
        <Select disabled={readonly}>
          {Object.entries(AlgorithmEnum).filter(([label, value]) => value !== 'subset').map(([label, value]) => {
            return (
              <Select.Option value={value} key={value}>
                {formatMessage({ id: `page.upstream.type.${label}` })}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      {/* Default Subset Configuration */}
      <Form.Item
        label={formatMessage({ id: 'component.upstream.fields.subset.default_subset' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.subset.default_subset.tooltip' })}
      >
        <Form.List name={['subset', 'default_subset']}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'key']}
                    rules={[{ required: true, message: formatMessage({ id: 'component.upstream.fields.subset.default_subset.key_required' }) }]}
                  >
                    <Input placeholder={formatMessage({ id: 'component.upstream.fields.subset.default_subset.key_placeholder' })} disabled={readonly} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'values']}
                    rules={[{ required: true, message: formatMessage({ id: 'component.upstream.fields.subset.default_subset.values_required' }) }]}
                  >
                    <Select
                      mode="tags"
                      style={{ width: '200px' }}
                      placeholder={formatMessage({ id: 'component.upstream.fields.subset.default_subset.values_placeholder' })}
                      disabled={readonly}
                    />
                  </Form.Item>
                  {!readonly && (
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  )}
                </Space>
              ))}
              {!readonly && (
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    {formatMessage({ id: 'component.upstream.fields.subset.default_subset.add' })}
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
      </Form.Item>

      {/* Subset Selectors Configuration */}
      <Form.Item
        label={formatMessage({ id: 'component.upstream.fields.subset.subset_selectors' })}
        tooltip={formatMessage({ id: 'component.upstream.fields.subset.subset_selectors.tooltip' })}
      >
        <Form.List name={['subset', 'subset_selectors']}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'keys']}
                    rules={[{ required: true, message: formatMessage({ id: 'component.upstream.fields.subset.subset_selectors.keys_required' }) }]}
                  >
                    <Select
                      mode="tags"
                      style={{ width: '300px' }}
                      placeholder={formatMessage({ id: 'component.upstream.fields.subset.subset_selectors.keys_placeholder' })}
                      disabled={readonly}
                    />
                  </Form.Item>
                  {!readonly && (
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  )}
                </Space>
              ))}
              {!readonly && (
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    {formatMessage({ id: 'component.upstream.fields.subset.subset_selectors.add' })}
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
      </Form.Item>
    </React.Fragment>
  );
};

const Component: React.FC<Props> = ({ readonly, form }) => {
  const { formatMessage } = useIntl();

  return (
    <React.Fragment>
      <Form.Item
        label={formatMessage({ id: 'page.upstream.step.type' })}
        name="type"
        rules={[{ required: true }]}
        initialValue="roundrobin"
      >
        <Select disabled={readonly}>
          {Object.entries(AlgorithmEnum).map(([label, value]) => {
            return (
              <Select.Option value={value} key={value}>
                {formatMessage({ id: `page.upstream.type.${label}` })}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {() => {
          const type = form.getFieldValue('type');
          if (type === 'chash') {
            return <CHash form={form} readonly={readonly} />;
          }
          if (type === 'subset') {
            return <Subset form={form} readonly={readonly} />;
          }
          return null;
        }}
      </Form.Item>
    </React.Fragment>
  );
};

export default Component;
