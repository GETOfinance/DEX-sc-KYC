/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AddPool = ContractEventLog<{
  pid: string;
  allocPoint: string;
  token: string;
  bonusMultiplier: string;
  bonusEndBlock: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Deposit = ContractEventLog<{
  user: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type EmergencyWithdraw = ContractEventLog<{
  user: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type SetPool = ContractEventLog<{
  pid: string;
  allocPoint: string;
  0: string;
  1: string;
}>;
export type UpdatePool = ContractEventLog<{
  pid: string;
  lastRewardBlock: string;
  lpSupply: string;
  accPtnPerShare: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type UpdatePoolMultiplier = ContractEventLog<{
  pid: string;
  multiplier: string;
  0: string;
  1: string;
}>;
export type UpdateRewardPerBlock = ContractEventLog<{
  rewardPerBlock: string;
  0: string;
}>;
export type Withdraw = ContractEventLog<{
  user: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface Farming extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Farming;
  clone(): Farming;
  methods: {
    add(
      _allocPoint: number | string | BN,
      _lpToken: string,
      _bonusMultiplier: number | string | BN,
      _bonusEndBlock: number | string | BN
    ): NonPayableTransactionObject<void>;

    addedTokens(arg0: string): NonPayableTransactionObject<boolean>;

    deposit(
      _pid: number | string | BN,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    emergencyWithdraw(
      _pid: number | string | BN
    ): NonPayableTransactionObject<void>;

    getMultiplier(
      _pid: number | string | BN,
      _from: number | string | BN,
      _to: number | string | BN
    ): NonPayableTransactionObject<string>;

    massUpdatePools(): NonPayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    pendingPtn(
      _pid: number | string | BN,
      _user: string
    ): NonPayableTransactionObject<string>;

    poolInfo(arg0: number | string | BN): NonPayableTransactionObject<{
      lpToken: string;
      bonusMultiplier: string;
      bonusEndBlock: string;
      totalStaked: string;
      allocPoint: string;
      lastRewardBlock: string;
      accPtnPerShare: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    }>;

    poolLength(): NonPayableTransactionObject<string>;

    ptn(): NonPayableTransactionObject<string>;

    ptnPerBlock(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    set(
      _pid: number | string | BN,
      _allocPoint: number | string | BN
    ): NonPayableTransactionObject<void>;

    startBlock(): NonPayableTransactionObject<string>;

    totalAllocPoint(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateMultiplier(
      _pid: number | string | BN,
      _multiplier: number | string | BN
    ): NonPayableTransactionObject<void>;

    updatePool(_pid: number | string | BN): NonPayableTransactionObject<void>;

    updatePtnPerBlock(
      _ptnPerBlock: number | string | BN
    ): NonPayableTransactionObject<void>;

    userInfo(
      arg0: number | string | BN,
      arg1: string
    ): NonPayableTransactionObject<{
      amount: string;
      rewardDebt: string;
      0: string;
      1: string;
    }>;

    withdraw(
      _pid: number | string | BN,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AddPool(cb?: Callback<AddPool>): EventEmitter;
    AddPool(options?: EventOptions, cb?: Callback<AddPool>): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    EmergencyWithdraw(cb?: Callback<EmergencyWithdraw>): EventEmitter;
    EmergencyWithdraw(
      options?: EventOptions,
      cb?: Callback<EmergencyWithdraw>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    SetPool(cb?: Callback<SetPool>): EventEmitter;
    SetPool(options?: EventOptions, cb?: Callback<SetPool>): EventEmitter;

    UpdatePool(cb?: Callback<UpdatePool>): EventEmitter;
    UpdatePool(options?: EventOptions, cb?: Callback<UpdatePool>): EventEmitter;

    UpdatePoolMultiplier(cb?: Callback<UpdatePoolMultiplier>): EventEmitter;
    UpdatePoolMultiplier(
      options?: EventOptions,
      cb?: Callback<UpdatePoolMultiplier>
    ): EventEmitter;

    UpdateRewardPerBlock(cb?: Callback<UpdateRewardPerBlock>): EventEmitter;
    UpdateRewardPerBlock(
      options?: EventOptions,
      cb?: Callback<UpdateRewardPerBlock>
    ): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddPool", cb: Callback<AddPool>): void;
  once(event: "AddPool", options: EventOptions, cb: Callback<AddPool>): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "EmergencyWithdraw", cb: Callback<EmergencyWithdraw>): void;
  once(
    event: "EmergencyWithdraw",
    options: EventOptions,
    cb: Callback<EmergencyWithdraw>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "SetPool", cb: Callback<SetPool>): void;
  once(event: "SetPool", options: EventOptions, cb: Callback<SetPool>): void;

  once(event: "UpdatePool", cb: Callback<UpdatePool>): void;
  once(
    event: "UpdatePool",
    options: EventOptions,
    cb: Callback<UpdatePool>
  ): void;

  once(event: "UpdatePoolMultiplier", cb: Callback<UpdatePoolMultiplier>): void;
  once(
    event: "UpdatePoolMultiplier",
    options: EventOptions,
    cb: Callback<UpdatePoolMultiplier>
  ): void;

  once(event: "UpdateRewardPerBlock", cb: Callback<UpdateRewardPerBlock>): void;
  once(
    event: "UpdateRewardPerBlock",
    options: EventOptions,
    cb: Callback<UpdateRewardPerBlock>
  ): void;

  once(event: "Withdraw", cb: Callback<Withdraw>): void;
  once(event: "Withdraw", options: EventOptions, cb: Callback<Withdraw>): void;
}
