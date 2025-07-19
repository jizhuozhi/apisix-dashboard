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
import {Button, Form, Input, Select, Space} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react';
import {useIntl} from 'umi';

type Props = {
  args: string[];
  readonly?: boolean;
};

const ServiceDiscoveryArgs: React.FC<Props> = ({readonly, args}) => {
  const {formatMessage} = useIntl();

  return (
    <React.Fragment>
      {args.map((item) => {
        if (item === 'metadata_match') {
          return (
            <Form.Item
              key="metadata_match"
              label={formatMessage({
                id: 'component.upstream.fields.discovery_args.metadata_match',
              })}
              tooltip={formatMessage({
                id: 'component.upstream.fields.discovery_args.metadata_match.tooltip',
              })}
            >
              <Form.List name={['discovery_args', 'metadata_match']}>
                {(fields, {add, remove}) => (
                  <>
                    {fields.map(({key, name, ...restField}) => (
                      <Space key={key} align="baseline" style={{display: 'flex', marginBottom: 8}}>
                        <Form.Item
                          {...restField}
                          name={[name, 'key']}
                          rules={[{required: true, message: 'Key is required'}]}
                        >
                          <Input
                            disabled={readonly}
                            placeholder={formatMessage({
                              id: 'component.global.value.key',
                              defaultMessage: 'Key',
                            })}
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'value']}
                          rules={[{required: true, message: 'Value is required'}]}
                        >
                          <Select
                            mode="tags"
                            style={{minWidth: 200, flex: 1}}
                            placeholder={formatMessage({
                              id: 'component.global.value.value',
                              defaultMessage: 'Comma-separated values (e.g. v1,v2)',
                            })}
                            tokenSeparators={[',']}
                            open={false}
                            showSearch={false}
                          />
                        </Form.Item>
                        {!readonly && (
                          <MinusCircleOutlined onClick={() => remove(name)}/>
                        )}
                      </Space>
                    ))}
                    {!readonly && (
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined/>}
                        >
                          {formatMessage({id: 'component.global.add'})}
                        </Button>
                      </Form.Item>
                    )}
                  </>
                )}
              </Form.List>
            </Form.Item>
          );
        }

        return (
          <Form.Item
            key={item}
            name={['discovery_args', item]}
            label={formatMessage({id: `component.upstream.fields.discovery_args.${item}`})}
            tooltip={formatMessage({
              id: `component.upstream.fields.discovery_args.${item}.tooltip`,
            })}
          >
            <Input
              disabled={readonly}
              placeholder={formatMessage({
                id: `component.upstream.fields.discovery_args.${item}.placeholder`,
              })}
            />
          </Form.Item>
        );
      })}
    </React.Fragment>
  );
};

export default ServiceDiscoveryArgs;
