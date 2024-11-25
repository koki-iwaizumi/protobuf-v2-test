import { create, type MessageInitShape } from "@bufbuild/protobuf";
import { PresenceSchema } from "./gen/example_pb";

const presence = create(PresenceSchema);

const presenceInitShape: MessageInitShape<typeof PresenceSchema> = {};

console.log(presence, presenceInitShape)
