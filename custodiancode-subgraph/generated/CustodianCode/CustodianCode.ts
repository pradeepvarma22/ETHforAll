// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenListedSuccess extends ethereum.Event {
  get params(): TokenListedSuccess__Params {
    return new TokenListedSuccess__Params(this);
  }
}

export class TokenListedSuccess__Params {
  _event: TokenListedSuccess;

  constructor(event: TokenListedSuccess) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get currentlyListed(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get isFiat(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get socialId(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CustodianCode__getAllNFTsResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get seller(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get currentlyListed(): boolean {
    return this[4].toBoolean();
  }

  get isFiat(): boolean {
    return this[5].toBoolean();
  }

  get socialId(): string {
    return this[6].toString();
  }

  get hasTxnDone(): boolean {
    return this[7].toBoolean();
  }

  get txnId(): string {
    return this[8].toString();
  }
}

export class CustodianCode__getLatestIdToNFTItemResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get seller(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get currentlyListed(): boolean {
    return this[4].toBoolean();
  }

  get isFiat(): boolean {
    return this[5].toBoolean();
  }

  get socialId(): string {
    return this[6].toString();
  }

  get hasTxnDone(): boolean {
    return this[7].toBoolean();
  }

  get txnId(): string {
    return this[8].toString();
  }
}

export class CustodianCode__getMyNFTsResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get seller(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get currentlyListed(): boolean {
    return this[4].toBoolean();
  }

  get isFiat(): boolean {
    return this[5].toBoolean();
  }

  get socialId(): string {
    return this[6].toString();
  }

  get hasTxnDone(): boolean {
    return this[7].toBoolean();
  }

  get txnId(): string {
    return this[8].toString();
  }
}

export class CustodianCode__getNFTItemForIdResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get seller(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get currentlyListed(): boolean {
    return this[4].toBoolean();
  }

  get isFiat(): boolean {
    return this[5].toBoolean();
  }

  get socialId(): string {
    return this[6].toString();
  }

  get hasTxnDone(): boolean {
    return this[7].toBoolean();
  }

  get txnId(): string {
    return this[8].toString();
  }
}

export class CustodianCode extends ethereum.SmartContract {
  static bind(address: Address): CustodianCode {
    return new CustodianCode("CustodianCode", address);
  }

  _itemsSold(): BigInt {
    let result = super.call("_itemsSold", "_itemsSold():(uint256)", []);

    return result[0].toBigInt();
  }

  try__itemsSold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_itemsSold", "_itemsSold():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _tokenIds(): BigInt {
    let result = super.call("_tokenIds", "_tokenIds():(uint256)", []);

    return result[0].toBigInt();
  }

  try__tokenIds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_tokenIds", "_tokenIds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  compare(str1: string, str2: string): boolean {
    let result = super.call("compare", "compare(string,string):(bool)", [
      ethereum.Value.fromString(str1),
      ethereum.Value.fromString(str2)
    ]);

    return result[0].toBoolean();
  }

  try_compare(str1: string, str2: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("compare", "compare(string,string):(bool)", [
      ethereum.Value.fromString(str1),
      ethereum.Value.fromString(str2)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createNFTByAdmin(tokenURI: string, _socialId: string, price: BigInt): BigInt {
    let result = super.call(
      "createNFTByAdmin",
      "createNFTByAdmin(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(tokenURI),
        ethereum.Value.fromString(_socialId),
        ethereum.Value.fromUnsignedBigInt(price)
      ]
    );

    return result[0].toBigInt();
  }

  try_createNFTByAdmin(
    tokenURI: string,
    _socialId: string,
    price: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createNFTByAdmin",
      "createNFTByAdmin(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(tokenURI),
        ethereum.Value.fromString(_socialId),
        ethereum.Value.fromUnsignedBigInt(price)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllNFTs(): Array<CustodianCode__getAllNFTsResultValue0Struct> {
    let result = super.call(
      "getAllNFTs",
      "getAllNFTs():((uint256,address,address,uint256,bool,bool,string,bool,string)[])",
      []
    );

    return result[0].toTupleArray<
      CustodianCode__getAllNFTsResultValue0Struct
    >();
  }

  try_getAllNFTs(): ethereum.CallResult<
    Array<CustodianCode__getAllNFTsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllNFTs",
      "getAllNFTs():((uint256,address,address,uint256,bool,bool,string,bool,string)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CustodianCode__getAllNFTsResultValue0Struct>()
    );
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLatestIdToNFTItem(): CustodianCode__getLatestIdToNFTItemResultValue0Struct {
    let result = super.call(
      "getLatestIdToNFTItem",
      "getLatestIdToNFTItem():((uint256,address,address,uint256,bool,bool,string,bool,string))",
      []
    );

    return changetype<CustodianCode__getLatestIdToNFTItemResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getLatestIdToNFTItem(): ethereum.CallResult<
    CustodianCode__getLatestIdToNFTItemResultValue0Struct
  > {
    let result = super.tryCall(
      "getLatestIdToNFTItem",
      "getLatestIdToNFTItem():((uint256,address,address,uint256,bool,bool,string,bool,string))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CustodianCode__getLatestIdToNFTItemResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getMyNFTs(
    _isFiat: boolean,
    _socialId: string
  ): Array<CustodianCode__getMyNFTsResultValue0Struct> {
    let result = super.call(
      "getMyNFTs",
      "getMyNFTs(bool,string):((uint256,address,address,uint256,bool,bool,string,bool,string)[])",
      [
        ethereum.Value.fromBoolean(_isFiat),
        ethereum.Value.fromString(_socialId)
      ]
    );

    return result[0].toTupleArray<CustodianCode__getMyNFTsResultValue0Struct>();
  }

  try_getMyNFTs(
    _isFiat: boolean,
    _socialId: string
  ): ethereum.CallResult<Array<CustodianCode__getMyNFTsResultValue0Struct>> {
    let result = super.tryCall(
      "getMyNFTs",
      "getMyNFTs(bool,string):((uint256,address,address,uint256,bool,bool,string,bool,string)[])",
      [
        ethereum.Value.fromBoolean(_isFiat),
        ethereum.Value.fromString(_socialId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CustodianCode__getMyNFTsResultValue0Struct>()
    );
  }

  getNFTItemForId(
    tokenId: BigInt
  ): CustodianCode__getNFTItemForIdResultValue0Struct {
    let result = super.call(
      "getNFTItemForId",
      "getNFTItemForId(uint256):((uint256,address,address,uint256,bool,bool,string,bool,string))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return changetype<CustodianCode__getNFTItemForIdResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getNFTItemForId(
    tokenId: BigInt
  ): ethereum.CallResult<CustodianCode__getNFTItemForIdResultValue0Struct> {
    let result = super.tryCall(
      "getNFTItemForId",
      "getNFTItemForId(uint256):((uint256,address,address,uint256,bool,bool,string,bool,string))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CustodianCode__getNFTItemForIdResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CreateNFTByAdminCall extends ethereum.Call {
  get inputs(): CreateNFTByAdminCall__Inputs {
    return new CreateNFTByAdminCall__Inputs(this);
  }

  get outputs(): CreateNFTByAdminCall__Outputs {
    return new CreateNFTByAdminCall__Outputs(this);
  }
}

export class CreateNFTByAdminCall__Inputs {
  _call: CreateNFTByAdminCall;

  constructor(call: CreateNFTByAdminCall) {
    this._call = call;
  }

  get tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _socialId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateNFTByAdminCall__Outputs {
  _call: CreateNFTByAdminCall;

  constructor(call: CreateNFTByAdminCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateNFTByUserCall extends ethereum.Call {
  get inputs(): CreateNFTByUserCall__Inputs {
    return new CreateNFTByUserCall__Inputs(this);
  }

  get outputs(): CreateNFTByUserCall__Outputs {
    return new CreateNFTByUserCall__Outputs(this);
  }
}

export class CreateNFTByUserCall__Inputs {
  _call: CreateNFTByUserCall;

  constructor(call: CreateNFTByUserCall) {
    this._call = call;
  }

  get tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateNFTByUserCall__Outputs {
  _call: CreateNFTByUserCall;

  constructor(call: CreateNFTByUserCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteSaleCall extends ethereum.Call {
  get inputs(): ExecuteSaleCall__Inputs {
    return new ExecuteSaleCall__Inputs(this);
  }

  get outputs(): ExecuteSaleCall__Outputs {
    return new ExecuteSaleCall__Outputs(this);
  }
}

export class ExecuteSaleCall__Inputs {
  _call: ExecuteSaleCall;

  constructor(call: ExecuteSaleCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteSaleCall__Outputs {
  _call: ExecuteSaleCall;

  constructor(call: ExecuteSaleCall) {
    this._call = call;
  }
}

export class ExecuteSaleByAdminCall extends ethereum.Call {
  get inputs(): ExecuteSaleByAdminCall__Inputs {
    return new ExecuteSaleByAdminCall__Inputs(this);
  }

  get outputs(): ExecuteSaleByAdminCall__Outputs {
    return new ExecuteSaleByAdminCall__Outputs(this);
  }
}

export class ExecuteSaleByAdminCall__Inputs {
  _call: ExecuteSaleByAdminCall;

  constructor(call: ExecuteSaleByAdminCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _txnId(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ExecuteSaleByAdminCall__Outputs {
  _call: ExecuteSaleByAdminCall;

  constructor(call: ExecuteSaleByAdminCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
