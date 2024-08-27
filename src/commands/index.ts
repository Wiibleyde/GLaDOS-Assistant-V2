import * as ping from "./general/ping"
import * as info from "./general/info"
import * as talk from "./general/talk"
import * as channels from "./config/channels"
import * as rename from "./config/rename"
import * as quote from "./general/quote"

import * as birthday from "./general/birthday"
import { addBirthdayModal } from "./general/birthday"

import * as logs from "./dev/logs"

export const commands = {
    ping,
    info,
    talk,
    birthday,
    channels,
    rename,
    quote,
}

export const devCommands = {
    logs,
}

export const modals = {
    addBirthdayModal,
}