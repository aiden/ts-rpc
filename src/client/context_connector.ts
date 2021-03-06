/**
 * @module ModuleRpcClient
 *
 * @license
 * Copyright (c) Aiden.ai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ModuleRpcCommon } from '../common';

/**
 * A context connector for the client.
 */
export interface ClientContextConnector<ResponseContext> {
  /**
   * Encodes the request context that is sent to the server
   * (the server decodes it into a `RequestContext` using a `ServerContextConnector`)
   */
  provideRequestContext(): Promise<ModuleRpcCommon.EncodedContext>;

  /**
   * Decodes the response context received from the server into a `ResponseContext`.
   */
  decodeResponseContext(
    encodedResponseContext: ModuleRpcCommon.EncodedContext,
  ): Promise<ResponseContext>;
}
