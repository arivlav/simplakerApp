import { Identifier } from "src/types"

export function generateIdentifier(): Identifier {
    return (new Date()).toDateString();
}