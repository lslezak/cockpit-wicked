/*
 * Copyright (c) [2020] SUSE LLC
 *
 * All Rights Reserved.
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of version 2 of the GNU General Public License as published
 * by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, contact SUSE LLC.
 *
 * To contact SUSE LLC about this file by physical or electronic mail, you may
 * find current contact information at www.suse.com.
 */

import { createAddressConfig } from './address';
import { createInterface } from './interfaces';
import { createConnection, mergeConnection } from './connections';
import { createRoute } from './routes';

/**
 * This module offers a set of factory functions for domain concepts like connections,
 * interfaces or routes.
 *
 * @module model
 */

export default {
    createInterface,
    createConnection,
    mergeConnection,
    createRoute,
    createAddressConfig
};
