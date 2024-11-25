import { create } from "@bufbuild/protobuf";
import { PresenceSchema } from "./gen/example_pb";

const presence = create(PresenceSchema);

console.log(presence)
