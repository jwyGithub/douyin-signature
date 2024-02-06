import pino from 'pino';

export const logger = pino();

export function Logger(method: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            logger.info(`${method} ${args[0]}`);
            return await fn.apply(this, args);
        };
    };
}

