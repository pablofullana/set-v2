import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface ManagerIssuanceHookMockInterface extends Interface {
    functions: {
        invokePreIssueHook: TypedFunctionDescription<{
            encode([_setToken, _issueQuantity, _sender, _to]: [string, BigNumberish, string, string]): string;
        }>;
        invokePreRedeemHook: TypedFunctionDescription<{
            encode([_setToken, _redeemQuantity, _sender, _to]: [string, BigNumberish, string, string]): string;
        }>;
        retrievedIssueQuantity: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        retrievedSender: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        retrievedSetToken: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        retrievedTo: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {};
}
export declare class ManagerIssuanceHookMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ManagerIssuanceHookMock;
    attach(addressOrName: string): ManagerIssuanceHookMock;
    deployed(): Promise<ManagerIssuanceHookMock>;
    on(event: EventFilter | string, listener: Listener): ManagerIssuanceHookMock;
    once(event: EventFilter | string, listener: Listener): ManagerIssuanceHookMock;
    addListener(eventName: EventFilter | string, listener: Listener): ManagerIssuanceHookMock;
    removeAllListeners(eventName: EventFilter | string): ManagerIssuanceHookMock;
    removeListener(eventName: any, listener: Listener): ManagerIssuanceHookMock;
    interface: ManagerIssuanceHookMockInterface;
    functions: {
        invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        retrievedIssueQuantity(): Promise<BigNumber>;
        retrievedSender(): Promise<string>;
        retrievedSetToken(): Promise<string>;
        retrievedTo(): Promise<string>;
    };
    invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    retrievedIssueQuantity(): Promise<BigNumber>;
    retrievedSender(): Promise<string>;
    retrievedSetToken(): Promise<string>;
    retrievedTo(): Promise<string>;
    filters: {};
    estimate: {
        invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string): Promise<BigNumber>;
        invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string): Promise<BigNumber>;
        retrievedIssueQuantity(): Promise<BigNumber>;
        retrievedSender(): Promise<BigNumber>;
        retrievedSetToken(): Promise<BigNumber>;
        retrievedTo(): Promise<BigNumber>;
    };
}
export {};