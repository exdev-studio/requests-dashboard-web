import React from 'react';
import { RequestFieldEntity } from '../../entities/request.entity';
import { BaseProps } from '../../model/BaseProps';

interface SingleRequestProps extends BaseProps {
  id: number;
  type: string;
  fields: RequestFieldEntity[];
}

export const SingleRequest = (props: SingleRequestProps) => (
  <>
    <div>Request ID: {props.id}</div>
    <div>Request Type: {props.type}</div>

    <table>
      <thead>
        <tr>
          <th>Field Type</th>
          <th>Field Name</th>
          <th>Field Value</th>
        </tr>
      </thead>

      <tbody>
        {props.fields.map((it, index) => (
          <tr key={index}>
            <td>{it.type}</td>
            <td>{it.name}</td>
            <td>{it.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
