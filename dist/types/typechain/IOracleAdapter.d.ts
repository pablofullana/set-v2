import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface IOracleAdapterInterface extends Interface {
    functions: {
        getPrice: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo]: [string, string]): string;
        }>;
    };
    events: {};
}
export declare class IOracleAdapter extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IOracleAdapter;
    attach(addressOrName: string): IOracleAdapter;
    deployed(): Promise<IOracleAdapter>;
    on(event: EventFilter | string, listener: Listener): IOracleAdapter;
    once(event: EventFilter | string, listener: Listener): IOracleAdapter;
    addListener(eventName: EventFilter | string, listener: Listener): IOracleAdapter;
    removeAllListeners(eventName: EventFilter | string): IOracleAdapter;
    removeListener(eventName: any, listener: Listener): IOracleAdapter;
    interface: IOracleAdapterInterface;
    functions: {
        getPrice(_assetOne: string, _assetTwo: string): Promise<{
            0: boolean;
            1: BigNumber;
        }>;
    };
    getPrice(_assetOne: string, _assetTwo: string): Promise<{
        0: boolean;
        1: BigNumber;
    }>;
    filters: {};
    estimate: {
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
    };
}
export {};