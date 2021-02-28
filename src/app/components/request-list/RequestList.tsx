import React from 'react';
import { RequestEntity, RequestFieldType, RequestType } from '../../entities/request.entity';
import { SingleRequest } from '../single-request/SingleRequest';
import './RequestList.css';

const requests: RequestEntity[] = [
  {
    id: 1,
    type: RequestType.VK_CREDENTIALS,
    fields: [
      {
        type: RequestFieldType.STRING,
        name: 'login',
        value: 'login-value',
      },
      {
        type: RequestFieldType.STRING,
        name: 'password',
        value: 'password-value',
      },
    ],
  },
  {
    id: 2,
    type: RequestType.VK_CREDENTIALS,
    fields: [
      {
        type: RequestFieldType.STRING,
        name: 'login',
        value: 'login-value',
      },
      {
        type: RequestFieldType.STRING,
        name: 'password',
        value: 'password-value',
      },
    ],
  },
  {
    id: 3,
    type: RequestType.VK_CREDENTIALS,
    fields: [
      {
        type: RequestFieldType.STRING,
        name: 'token',
        value: 'token-value',
      },
    ],
  },
];

export const RequestList = () => (
  <div className="request-list box">
    {requests.map(it => (
      <div key={it.id} className="single-request">
        <SingleRequest id={it.id} type={it.type} fields={it.fields} />
      </div>
    ))}
  </div>
);
