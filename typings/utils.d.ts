import { Mirror, throttleOptions, listenerHandler, hookResetter, blockClass, eventWithTime, addedNodeMutation, removedNodeMutation, textMutation, attributeMutation, mutationData, scrollData, inputData, DocumentDimension, Mirror2 } from './types';
import { INode, serializedNodeWithId, INode2 } from 'rrweb-snapshot';
export declare function on(type: string, fn: EventListenerOrEventListenerObject, target?: Document | Window): listenerHandler;
export declare const mirror: Mirror;
export declare function createMirror2(): Mirror2;
export declare function throttle<T>(func: (arg: T) => void, wait: number, options?: throttleOptions): (arg: T) => void;
export declare function hookSetter<T>(target: T, key: string | number | symbol, d: PropertyDescriptor, isRevoked?: boolean, win?: Window & typeof globalThis): hookResetter;
export declare function patch(source: {
    [key: string]: any;
}, name: string, replacement: (...args: any[]) => any): () => void;
export declare function getWindowHeight(): number;
export declare function getWindowWidth(): number;
export declare function isBlocked(node: Node | null, blockClass: blockClass): boolean;
export declare function isIgnored(n: Node | INode): boolean;
export declare function isAncestorRemoved(target: INode): boolean;
export declare function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent;
export declare function polyfill(win?: Window & typeof globalThis): void;
export declare function needCastInSyncMode(event: eventWithTime): boolean;
export declare type TreeNode = {
    id: number;
    mutation: addedNodeMutation;
    parent?: TreeNode;
    children: Record<number, TreeNode>;
    texts: textMutation[];
    attributes: attributeMutation[];
};
export declare class TreeIndex {
    tree: Record<number, TreeNode>;
    private removeNodeMutations;
    private textMutations;
    private attributeMutations;
    private indexes;
    private removeIdSet;
    private scrollMap;
    private inputMap;
    constructor();
    add(mutation: addedNodeMutation): void;
    remove(mutation: removedNodeMutation): void;
    text(mutation: textMutation): void;
    attribute(mutation: attributeMutation): void;
    scroll(d: scrollData): void;
    input(d: inputData): void;
    flush(): {
        mutationData: mutationData;
        scrollMap: TreeIndex['scrollMap'];
        inputMap: TreeIndex['inputMap'];
    };
    private reset;
}
declare type ResolveTree = {
    value: addedNodeMutation;
    children: ResolveTree[];
    parent: ResolveTree | null;
};
export declare function queueToResolveTrees(queue: addedNodeMutation[]): ResolveTree[];
export declare function iterateResolveTree(tree: ResolveTree, cb: (mutation: addedNodeMutation) => unknown): void;
declare type HTMLIFrameINode = HTMLIFrameElement & {
    __sn: serializedNodeWithId;
};
export declare type AppendedIframe = {
    mutationInQueue: addedNodeMutation;
    builtNode: HTMLIFrameINode;
};
export declare function isIframeINode(node: INode): node is HTMLIFrameINode;
declare type HTMLIFrameINode2 = HTMLIFrameElement & {
    __rsn: serializedNodeWithId;
};
export declare type AppendedIframe2 = {
    mutationInQueue: addedNodeMutation;
    builtNode: HTMLIFrameINode2;
};
export declare function isIframeINode2(node: INode2): node is HTMLIFrameINode2;
export declare function getBaseDimension(node: Node, rootIframe: Node): DocumentDimension;
export {};
