import React, { useEffect, useState } from 'react';
import { SingleRequest } from '../single-request/SingleRequest';
import './RequestList.css';
import { RequestEntity, RequestFieldType, RequestType } from '../../entities/request.entity';

const items: RequestEntity[] = [
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
const getItems: () => Promise<RequestEntity[]> = () => new Promise(resolve => resolve(items));

export const RequestList = () => {
  const [ requests, setRequests ]: [ RequestEntity[], (reqs: RequestEntity[]) => void ] = useState<RequestEntity[]>([]);

  useEffect(() => {
    getItems().then(it => setRequests(it));
  });

  return (
    <div className="request-list box">
      {requests.map(it => (
        <div key={it.id} className="single-request">
          <SingleRequest id={it.id} type={it.type} fields={it.fields} />
        </div>
      ))}
    </div>
  );
};
