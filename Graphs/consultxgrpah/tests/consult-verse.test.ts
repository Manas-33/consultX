import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddedClient } from "../generated/schema"
import { AddedClient as AddedClientEvent } from "../generated/ConsultVerse/ConsultVerse"
import { handleAddedClient } from "../src/consult-verse"
import { createAddedClientEvent } from "./consult-verse-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ClientAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ClientName = "Example string value"
    let ClientEmailId = "Example string value"
    let ClientPhoneNumber = "Example string value"
    let IntersestedConsulation = "Example string value"
    let newAddedClientEvent = createAddedClientEvent(
      ClientAddress,
      ClientName,
      ClientEmailId,
      ClientPhoneNumber,
      IntersestedConsulation
    )
    handleAddedClient(newAddedClientEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedClient created and stored", () => {
    assert.entityCount("AddedClient", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddedClient",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ClientAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddedClient",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ClientName",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedClient",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ClientEmailId",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedClient",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ClientPhoneNumber",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedClient",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "IntersestedConsulation",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
