import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getUserByName?: Maybe<User>;
  getUsers: Array<User>;
};


export type QueryGetUserByNameArgs = {
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  branch: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  registrationNo: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
  year: Scalars['String'];
};

export type GetUserByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserByNameQuery = { __typename?: 'Query', getUserByName?: { __typename?: 'User', firstName: string, lastName: string, email: string, registrationNo: string, createdAt: any } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', firstName: string, lastName: string, email: string, registrationNo: string, createdAt: any }> };


export const GetUserByNameDocument = gql`
    query getUserByName($name: String!) {
  getUserByName(name: $name) {
    firstName
    lastName
    email
    registrationNo
    createdAt
  }
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    firstName
    lastName
    email
    registrationNo
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUserByName(variables: GetUserByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByNameQuery>(GetUserByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByName', 'query');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;