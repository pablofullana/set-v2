import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface ControllerInterface extends Interface {
    functions: {
        addFactory: TypedFunctionDescription<{
            encode([_factory]: [string]): string;
        }>;
        addFee: TypedFunctionDescription<{
            encode([_module, _feeType, _newFeePercentage]: [string, BigNumberish, BigNumberish]): string;
        }>;
        addModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        addResource: TypedFunctionDescription<{
            encode([_resource, _id]: [string, BigNumberish]): string;
        }>;
        addSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        editFee: TypedFunctionDescription<{
            encode([_module, _feeType, _newFeePercentage]: [string, BigNumberish, BigNumberish]): string;
        }>;
        editFeeRecipient: TypedFunctionDescription<{
            encode([_newFeeRecipient]: [string]): string;
        }>;
        factories: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        feeRecipient: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        fees: TypedFunctionDescription<{
            encode([,]: [string, BigNumberish]): string;
        }>;
        getFactories: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getModuleFee: TypedFunctionDescription<{
            encode([_moduleAddress, _feeType]: [string, BigNumberish]): string;
        }>;
        getModules: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getResources: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getSets: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        initialize: TypedFunctionDescription<{
            encode([_factories, _modules, _resources, _resourceIds]: [string[], string[], string[], BigNumberish[]]): string;
        }>;
        isFactory: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        isInitialized: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        isModule: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        isResource: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        isSet: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        isSystemContract: TypedFunctionDescription<{
            encode([_contractAddress]: [string]): string;
        }>;
        modules: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        owner: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        removeFactory: TypedFunctionDescription<{
            encode([_factory]: [string]): string;
        }>;
        removeModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        removeResource: TypedFunctionDescription<{
            encode([_id]: [BigNumberish]): string;
        }>;
        removeSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        renounceOwnership: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        resourceId: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        resources: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        sets: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        transferOwnership: TypedFunctionDescription<{
            encode([newOwner]: [string]): string;
        }>;
    };
    events: {
        FactoryAdded: TypedEventDescription<{
            encodeTopics([_factory]: [string | null]): string[];
        }>;
        FactoryRemoved: TypedEventDescription<{
            encodeTopics([_factory]: [string | null]): string[];
        }>;
        FeeEdited: TypedEventDescription<{
            encodeTopics([_module, _feeType, _feePercentage]: [string | null, BigNumberish | null, null]): string[];
        }>;
        FeeRecipientChanged: TypedEventDescription<{
            encodeTopics([_newFeeRecipient]: [null]): string[];
        }>;
        ModuleAdded: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        ModuleRemoved: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        OwnershipTransferred: TypedEventDescription<{
            encodeTopics([previousOwner, newOwner]: [string | null, string | null]): string[];
        }>;
        ResourceAdded: TypedEventDescription<{
            encodeTopics([_resource, _id]: [string | null, null]): string[];
        }>;
        ResourceRemoved: TypedEventDescription<{
            encodeTopics([_resource, _id]: [string | null, null]): string[];
        }>;
        SetAdded: TypedEventDescription<{
            encodeTopics([_setToken, _factory]: [string | null, string | null]): string[];
        }>;
        SetRemoved: TypedEventDescription<{
            encodeTopics([_setToken]: [string | null]): string[];
        }>;
    };
}
export declare class Controller extends Contract {
    connect(signerOrProvider: Signer | Provider | string): Controller;
    attach(addressOrName: string): Controller;
    deployed(): Promise<Controller>;
    on(event: EventFilter | string, listener: Listener): Controller;
    once(event: EventFilter | string, listener: Listener): Controller;
    addListener(eventName: EventFilter | string, listener: Listener): Controller;
    removeAllListeners(eventName: EventFilter | string): Controller;
    removeListener(eventName: any, listener: Listener): Controller;
    interface: ControllerInterface;
    functions: {
        addFactory(_factory: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addResource(_resource: string, _id: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editFeeRecipient(_newFeeRecipient: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        factories(arg0: BigNumberish): Promise<string>;
        feeRecipient(): Promise<string>;
        fees(arg0: string, arg1: BigNumberish): Promise<BigNumber>;
        getFactories(): Promise<string[]>;
        getModuleFee(_moduleAddress: string, _feeType: BigNumberish): Promise<BigNumber>;
        getModules(): Promise<string[]>;
        getResources(): Promise<string[]>;
        getSets(): Promise<string[]>;
        initialize(_factories: string[], _modules: string[], _resources: string[], _resourceIds: BigNumberish[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
        isFactory(arg0: string): Promise<boolean>;
        isInitialized(): Promise<boolean>;
        isModule(arg0: string): Promise<boolean>;
        isResource(arg0: string): Promise<boolean>;
        isSet(arg0: string): Promise<boolean>;
        isSystemContract(_contractAddress: string): Promise<boolean>;
        modules(arg0: BigNumberish): Promise<string>;
        owner(): Promise<string>;
        removeFactory(_factory: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeResource(_id: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        resourceId(arg0: BigNumberish): Promise<string>;
        resources(arg0: BigNumberish): Promise<string>;
        sets(arg0: BigNumberish): Promise<string>;
        transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    addFactory(_factory: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addResource(_resource: string, _id: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editFeeRecipient(_newFeeRecipient: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    factories(arg0: BigNumberish): Promise<string>;
    feeRecipient(): Promise<string>;
    fees(arg0: string, arg1: BigNumberish): Promise<BigNumber>;
    getFactories(): Promise<string[]>;
    getModuleFee(_moduleAddress: string, _feeType: BigNumberish): Promise<BigNumber>;
    getModules(): Promise<string[]>;
    getResources(): Promise<string[]>;
    getSets(): Promise<string[]>;
    initialize(_factories: string[], _modules: string[], _resources: string[], _resourceIds: BigNumberish[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
    isFactory(arg0: string): Promise<boolean>;
    isInitialized(): Promise<boolean>;
    isModule(arg0: string): Promise<boolean>;
    isResource(arg0: string): Promise<boolean>;
    isSet(arg0: string): Promise<boolean>;
    isSystemContract(_contractAddress: string): Promise<boolean>;
    modules(arg0: BigNumberish): Promise<string>;
    owner(): Promise<string>;
    removeFactory(_factory: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeResource(_id: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    resourceId(arg0: BigNumberish): Promise<string>;
    resources(arg0: BigNumberish): Promise<string>;
    sets(arg0: BigNumberish): Promise<string>;
    transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        FactoryAdded(_factory: string | null): EventFilter;
        FactoryRemoved(_factory: string | null): EventFilter;
        FeeEdited(_module: string | null, _feeType: BigNumberish | null, _feePercentage: null): EventFilter;
        FeeRecipientChanged(_newFeeRecipient: null): EventFilter;
        ModuleAdded(_module: string | null): EventFilter;
        ModuleRemoved(_module: string | null): EventFilter;
        OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
        ResourceAdded(_resource: string | null, _id: null): EventFilter;
        ResourceRemoved(_resource: string | null, _id: null): EventFilter;
        SetAdded(_setToken: string | null, _factory: string | null): EventFilter;
        SetRemoved(_setToken: string | null): EventFilter;
    };
    estimate: {
        addFactory(_factory: string): Promise<BigNumber>;
        addFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish): Promise<BigNumber>;
        addModule(_module: string): Promise<BigNumber>;
        addResource(_resource: string, _id: BigNumberish): Promise<BigNumber>;
        addSet(_setToken: string): Promise<BigNumber>;
        editFee(_module: string, _feeType: BigNumberish, _newFeePercentage: BigNumberish): Promise<BigNumber>;
        editFeeRecipient(_newFeeRecipient: string): Promise<BigNumber>;
        factories(arg0: BigNumberish): Promise<BigNumber>;
        feeRecipient(): Promise<BigNumber>;
        fees(arg0: string, arg1: BigNumberish): Promise<BigNumber>;
        getFactories(): Promise<BigNumber>;
        getModuleFee(_moduleAddress: string, _feeType: BigNumberish): Promise<BigNumber>;
        getModules(): Promise<BigNumber>;
        getResources(): Promise<BigNumber>;
        getSets(): Promise<BigNumber>;
        initialize(_factories: string[], _modules: string[], _resources: string[], _resourceIds: BigNumberish[]): Promise<BigNumber>;
        isFactory(arg0: string): Promise<BigNumber>;
        isInitialized(): Promise<BigNumber>;
        isModule(arg0: string): Promise<BigNumber>;
        isResource(arg0: string): Promise<BigNumber>;
        isSet(arg0: string): Promise<BigNumber>;
        isSystemContract(_contractAddress: string): Promise<BigNumber>;
        modules(arg0: BigNumberish): Promise<BigNumber>;
        owner(): Promise<BigNumber>;
        removeFactory(_factory: string): Promise<BigNumber>;
        removeModule(_module: string): Promise<BigNumber>;
        removeResource(_id: BigNumberish): Promise<BigNumber>;
        removeSet(_setToken: string): Promise<BigNumber>;
        renounceOwnership(): Promise<BigNumber>;
        resourceId(arg0: BigNumberish): Promise<BigNumber>;
        resources(arg0: BigNumberish): Promise<BigNumber>;
        sets(arg0: BigNumberish): Promise<BigNumber>;
        transferOwnership(newOwner: string): Promise<BigNumber>;
    };
}
export {};