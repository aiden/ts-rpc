/**
 * @license
 * Copyright (c) Aiden.ai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ModuleRpcCommon } from '../../common';

export type NumberService = typeof numberServiceDefinition;

/** Defines the banking service, giving all the methods and the request and response types. */
export const numberServiceDefinition = {
  increment: {
    request: {} as { value: number },
    response: {} as {
      value: number;
    },
  },
  /**
   * An example of a server stream that returns a message at regular intervals.
   */
  streamNumbers: {
    // This property indicates that the method serves a stream of messages
    // rather than a unary response.
    type: ModuleRpcCommon.ServiceMethodType.serverStream,
    request: {} as { max: number; sleepMs: number },
    response: {} as {
      counter: number;
    },
  },
};
