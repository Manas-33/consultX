import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedClient,
  AddedExpert,
  ClientRequested,
  ExpertRequested
} from "../generated/ConsultVerse/ConsultVerse"

export function createAddedClientEvent(
  ClientAddress: Address,
  ClientName: string,
  ClientEmailId: string,
  ClientPhoneNumber: string,
  IntersestedConsulation: string
): AddedClient {
  let addedClientEvent = changetype<AddedClient>(newMockEvent())

  addedClientEvent.parameters = new Array()

  addedClientEvent.parameters.push(
    new ethereum.EventParam(
      "ClientAddress",
      ethereum.Value.fromAddress(ClientAddress)
    )
  )
  addedClientEvent.parameters.push(
    new ethereum.EventParam("ClientName", ethereum.Value.fromString(ClientName))
  )
  addedClientEvent.parameters.push(
    new ethereum.EventParam(
      "ClientEmailId",
      ethereum.Value.fromString(ClientEmailId)
    )
  )
  addedClientEvent.parameters.push(
    new ethereum.EventParam(
      "ClientPhoneNumber",
      ethereum.Value.fromString(ClientPhoneNumber)
    )
  )
  addedClientEvent.parameters.push(
    new ethereum.EventParam(
      "IntersestedConsulation",
      ethereum.Value.fromString(IntersestedConsulation)
    )
  )

  return addedClientEvent
}

export function createAddedExpertEvent(
  ExpertAddress: Address,
  ExpertName: string,
  EmailId: string,
  PhoneNumber: string,
  Expertise: string,
  ExpertFees: BigInt
): AddedExpert {
  let addedExpertEvent = changetype<AddedExpert>(newMockEvent())

  addedExpertEvent.parameters = new Array()

  addedExpertEvent.parameters.push(
    new ethereum.EventParam(
      "ExpertAddress",
      ethereum.Value.fromAddress(ExpertAddress)
    )
  )
  addedExpertEvent.parameters.push(
    new ethereum.EventParam("ExpertName", ethereum.Value.fromString(ExpertName))
  )
  addedExpertEvent.parameters.push(
    new ethereum.EventParam("EmailId", ethereum.Value.fromString(EmailId))
  )
  addedExpertEvent.parameters.push(
    new ethereum.EventParam(
      "PhoneNumber",
      ethereum.Value.fromString(PhoneNumber)
    )
  )
  addedExpertEvent.parameters.push(
    new ethereum.EventParam("Expertise", ethereum.Value.fromString(Expertise))
  )
  addedExpertEvent.parameters.push(
    new ethereum.EventParam(
      "ExpertFees",
      ethereum.Value.fromUnsignedBigInt(ExpertFees)
    )
  )

  return addedExpertEvent
}

export function createClientRequestedEvent(
  ClientAddress: Address,
  ClientEmailAddress: string,
  ClientName: string,
  phoneNumber: string,
  RequestIndex: BigInt
): ClientRequested {
  let clientRequestedEvent = changetype<ClientRequested>(newMockEvent())

  clientRequestedEvent.parameters = new Array()

  clientRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "ClientAddress",
      ethereum.Value.fromAddress(ClientAddress)
    )
  )
  clientRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "ClientEmailAddress",
      ethereum.Value.fromString(ClientEmailAddress)
    )
  )
  clientRequestedEvent.parameters.push(
    new ethereum.EventParam("ClientName", ethereum.Value.fromString(ClientName))
  )
  clientRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNumber",
      ethereum.Value.fromString(phoneNumber)
    )
  )
  clientRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "RequestIndex",
      ethereum.Value.fromUnsignedBigInt(RequestIndex)
    )
  )

  return clientRequestedEvent
}

export function createExpertRequestedEvent(
  ExpertAddress: Address,
  RequestNumber: BigInt,
  ExpertName: string,
  ExpertemailAddress: string,
  phoneNumber: string,
  expertise: string,
  coursefees: BigInt
): ExpertRequested {
  let expertRequestedEvent = changetype<ExpertRequested>(newMockEvent())

  expertRequestedEvent.parameters = new Array()

  expertRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "ExpertAddress",
      ethereum.Value.fromAddress(ExpertAddress)
    )
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "RequestNumber",
      ethereum.Value.fromUnsignedBigInt(RequestNumber)
    )
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam("ExpertName", ethereum.Value.fromString(ExpertName))
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "ExpertemailAddress",
      ethereum.Value.fromString(ExpertemailAddress)
    )
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNumber",
      ethereum.Value.fromString(phoneNumber)
    )
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam("expertise", ethereum.Value.fromString(expertise))
  )
  expertRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "coursefees",
      ethereum.Value.fromUnsignedBigInt(coursefees)
    )
  )

  return expertRequestedEvent
}
