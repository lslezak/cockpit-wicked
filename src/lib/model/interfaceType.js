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

import cockpit from 'cockpit';

const _ = cockpit.gettext;
const NC_ = cockpit.noop;

const ETHERNET = "eth";
const WIRELESS = "wlan";
const BONDING = "bond";
const BRIDGE = "br";
const VLAN = "vlan";

const values = [
    ETHERNET,
    WIRELESS,
    BONDING,
    BRIDGE,
    VLAN
];

const labels = {
    [ETHERNET]: NC_("Ethernet"),
    [WIRELESS]: NC_("Wireless"),
    [BONDING]: NC_("Bonding"),
    [BRIDGE]: NC_("Bridge"),
    [VLAN]: NC_("VLAN")
};

const label = (type) => _(labels[type]);

const virtualTypes = [BONDING, BRIDGE, VLAN];
const isVirtual = (type) => virtualTypes.includes(type);

export default {
    ETHERNET,
    WIRELESS,
    BONDING,
    BRIDGE,
    VLAN,
    values,
    label,
    isVirtual
};
