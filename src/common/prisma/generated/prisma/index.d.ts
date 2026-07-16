
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model binh_luan
 * 
 */
export type binh_luan = $Result.DefaultSelection<Prisma.$binh_luanPayload>
/**
 * Model hinh_anh
 * 
 */
export type hinh_anh = $Result.DefaultSelection<Prisma.$hinh_anhPayload>
/**
 * Model luu_anh
 * 
 */
export type luu_anh = $Result.DefaultSelection<Prisma.$luu_anhPayload>
/**
 * Model nguoi_dung
 * 
 */
export type nguoi_dung = $Result.DefaultSelection<Prisma.$nguoi_dungPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Binh_luans
 * const binh_luans = await prisma.binh_luan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Binh_luans
   * const binh_luans = await prisma.binh_luan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.binh_luan`: Exposes CRUD operations for the **binh_luan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Binh_luans
    * const binh_luans = await prisma.binh_luan.findMany()
    * ```
    */
  get binh_luan(): Prisma.binh_luanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hinh_anh`: Exposes CRUD operations for the **hinh_anh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hinh_anhs
    * const hinh_anhs = await prisma.hinh_anh.findMany()
    * ```
    */
  get hinh_anh(): Prisma.hinh_anhDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.luu_anh`: Exposes CRUD operations for the **luu_anh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luu_anhs
    * const luu_anhs = await prisma.luu_anh.findMany()
    * ```
    */
  get luu_anh(): Prisma.luu_anhDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nguoi_dung`: Exposes CRUD operations for the **nguoi_dung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nguoi_dungs
    * const nguoi_dungs = await prisma.nguoi_dung.findMany()
    * ```
    */
  get nguoi_dung(): Prisma.nguoi_dungDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    binh_luan: 'binh_luan',
    hinh_anh: 'hinh_anh',
    luu_anh: 'luu_anh',
    nguoi_dung: 'nguoi_dung'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "binh_luan" | "hinh_anh" | "luu_anh" | "nguoi_dung"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      binh_luan: {
        payload: Prisma.$binh_luanPayload<ExtArgs>
        fields: Prisma.binh_luanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.binh_luanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.binh_luanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          findFirst: {
            args: Prisma.binh_luanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.binh_luanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          findMany: {
            args: Prisma.binh_luanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>[]
          }
          create: {
            args: Prisma.binh_luanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          createMany: {
            args: Prisma.binh_luanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.binh_luanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          update: {
            args: Prisma.binh_luanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          deleteMany: {
            args: Prisma.binh_luanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.binh_luanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.binh_luanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$binh_luanPayload>
          }
          aggregate: {
            args: Prisma.Binh_luanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBinh_luan>
          }
          groupBy: {
            args: Prisma.binh_luanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Binh_luanGroupByOutputType>[]
          }
          count: {
            args: Prisma.binh_luanCountArgs<ExtArgs>
            result: $Utils.Optional<Binh_luanCountAggregateOutputType> | number
          }
        }
      }
      hinh_anh: {
        payload: Prisma.$hinh_anhPayload<ExtArgs>
        fields: Prisma.hinh_anhFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hinh_anhFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hinh_anhFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          findFirst: {
            args: Prisma.hinh_anhFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hinh_anhFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          findMany: {
            args: Prisma.hinh_anhFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>[]
          }
          create: {
            args: Prisma.hinh_anhCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          createMany: {
            args: Prisma.hinh_anhCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hinh_anhDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          update: {
            args: Prisma.hinh_anhUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          deleteMany: {
            args: Prisma.hinh_anhDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hinh_anhUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hinh_anhUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hinh_anhPayload>
          }
          aggregate: {
            args: Prisma.Hinh_anhAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHinh_anh>
          }
          groupBy: {
            args: Prisma.hinh_anhGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hinh_anhGroupByOutputType>[]
          }
          count: {
            args: Prisma.hinh_anhCountArgs<ExtArgs>
            result: $Utils.Optional<Hinh_anhCountAggregateOutputType> | number
          }
        }
      }
      luu_anh: {
        payload: Prisma.$luu_anhPayload<ExtArgs>
        fields: Prisma.luu_anhFieldRefs
        operations: {
          findUnique: {
            args: Prisma.luu_anhFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.luu_anhFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          findFirst: {
            args: Prisma.luu_anhFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.luu_anhFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          findMany: {
            args: Prisma.luu_anhFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>[]
          }
          create: {
            args: Prisma.luu_anhCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          createMany: {
            args: Prisma.luu_anhCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.luu_anhDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          update: {
            args: Prisma.luu_anhUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          deleteMany: {
            args: Prisma.luu_anhDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.luu_anhUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.luu_anhUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$luu_anhPayload>
          }
          aggregate: {
            args: Prisma.Luu_anhAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLuu_anh>
          }
          groupBy: {
            args: Prisma.luu_anhGroupByArgs<ExtArgs>
            result: $Utils.Optional<Luu_anhGroupByOutputType>[]
          }
          count: {
            args: Prisma.luu_anhCountArgs<ExtArgs>
            result: $Utils.Optional<Luu_anhCountAggregateOutputType> | number
          }
        }
      }
      nguoi_dung: {
        payload: Prisma.$nguoi_dungPayload<ExtArgs>
        fields: Prisma.nguoi_dungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nguoi_dungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nguoi_dungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          findFirst: {
            args: Prisma.nguoi_dungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nguoi_dungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          findMany: {
            args: Prisma.nguoi_dungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>[]
          }
          create: {
            args: Prisma.nguoi_dungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          createMany: {
            args: Prisma.nguoi_dungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.nguoi_dungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          update: {
            args: Prisma.nguoi_dungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          deleteMany: {
            args: Prisma.nguoi_dungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nguoi_dungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nguoi_dungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          aggregate: {
            args: Prisma.Nguoi_dungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoi_dung>
          }
          groupBy: {
            args: Prisma.nguoi_dungGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nguoi_dungGroupByOutputType>[]
          }
          count: {
            args: Prisma.nguoi_dungCountArgs<ExtArgs>
            result: $Utils.Optional<Nguoi_dungCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    binh_luan?: binh_luanOmit
    hinh_anh?: hinh_anhOmit
    luu_anh?: luu_anhOmit
    nguoi_dung?: nguoi_dungOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Hinh_anhCountOutputType
   */

  export type Hinh_anhCountOutputType = {
    luu_anh: number
  }

  export type Hinh_anhCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    luu_anh?: boolean | Hinh_anhCountOutputTypeCountLuu_anhArgs
  }

  // Custom InputTypes
  /**
   * Hinh_anhCountOutputType without action
   */
  export type Hinh_anhCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hinh_anhCountOutputType
     */
    select?: Hinh_anhCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hinh_anhCountOutputType without action
   */
  export type Hinh_anhCountOutputTypeCountLuu_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: luu_anhWhereInput
  }


  /**
   * Count Type Nguoi_dungCountOutputType
   */

  export type Nguoi_dungCountOutputType = {
    binh_luan: number
    hinh_anh: number
    luu_anh: number
  }

  export type Nguoi_dungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    binh_luan?: boolean | Nguoi_dungCountOutputTypeCountBinh_luanArgs
    hinh_anh?: boolean | Nguoi_dungCountOutputTypeCountHinh_anhArgs
    luu_anh?: boolean | Nguoi_dungCountOutputTypeCountLuu_anhArgs
  }

  // Custom InputTypes
  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nguoi_dungCountOutputType
     */
    select?: Nguoi_dungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeCountBinh_luanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: binh_luanWhereInput
  }

  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeCountHinh_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hinh_anhWhereInput
  }

  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeCountLuu_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: luu_anhWhereInput
  }


  /**
   * Models
   */

  /**
   * Model binh_luan
   */

  export type AggregateBinh_luan = {
    _count: Binh_luanCountAggregateOutputType | null
    _avg: Binh_luanAvgAggregateOutputType | null
    _sum: Binh_luanSumAggregateOutputType | null
    _min: Binh_luanMinAggregateOutputType | null
    _max: Binh_luanMaxAggregateOutputType | null
  }

  export type Binh_luanAvgAggregateOutputType = {
    binh_luan_id: number | null
    nguoi_dung_id: number | null
    hinh_id: number | null
  }

  export type Binh_luanSumAggregateOutputType = {
    binh_luan_id: number | null
    nguoi_dung_id: number | null
    hinh_id: number | null
  }

  export type Binh_luanMinAggregateOutputType = {
    binh_luan_id: number | null
    nguoi_dung_id: number | null
    hinh_id: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
  }

  export type Binh_luanMaxAggregateOutputType = {
    binh_luan_id: number | null
    nguoi_dung_id: number | null
    hinh_id: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
  }

  export type Binh_luanCountAggregateOutputType = {
    binh_luan_id: number
    nguoi_dung_id: number
    hinh_id: number
    ngay_binh_luan: number
    noi_dung: number
    _all: number
  }


  export type Binh_luanAvgAggregateInputType = {
    binh_luan_id?: true
    nguoi_dung_id?: true
    hinh_id?: true
  }

  export type Binh_luanSumAggregateInputType = {
    binh_luan_id?: true
    nguoi_dung_id?: true
    hinh_id?: true
  }

  export type Binh_luanMinAggregateInputType = {
    binh_luan_id?: true
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_binh_luan?: true
    noi_dung?: true
  }

  export type Binh_luanMaxAggregateInputType = {
    binh_luan_id?: true
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_binh_luan?: true
    noi_dung?: true
  }

  export type Binh_luanCountAggregateInputType = {
    binh_luan_id?: true
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_binh_luan?: true
    noi_dung?: true
    _all?: true
  }

  export type Binh_luanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which binh_luan to aggregate.
     */
    where?: binh_luanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of binh_luans to fetch.
     */
    orderBy?: binh_luanOrderByWithRelationInput | binh_luanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: binh_luanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` binh_luans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` binh_luans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned binh_luans
    **/
    _count?: true | Binh_luanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Binh_luanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Binh_luanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Binh_luanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Binh_luanMaxAggregateInputType
  }

  export type GetBinh_luanAggregateType<T extends Binh_luanAggregateArgs> = {
        [P in keyof T & keyof AggregateBinh_luan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinh_luan[P]>
      : GetScalarType<T[P], AggregateBinh_luan[P]>
  }




  export type binh_luanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: binh_luanWhereInput
    orderBy?: binh_luanOrderByWithAggregationInput | binh_luanOrderByWithAggregationInput[]
    by: Binh_luanScalarFieldEnum[] | Binh_luanScalarFieldEnum
    having?: binh_luanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Binh_luanCountAggregateInputType | true
    _avg?: Binh_luanAvgAggregateInputType
    _sum?: Binh_luanSumAggregateInputType
    _min?: Binh_luanMinAggregateInputType
    _max?: Binh_luanMaxAggregateInputType
  }

  export type Binh_luanGroupByOutputType = {
    binh_luan_id: number
    nguoi_dung_id: number | null
    hinh_id: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
    _count: Binh_luanCountAggregateOutputType | null
    _avg: Binh_luanAvgAggregateOutputType | null
    _sum: Binh_luanSumAggregateOutputType | null
    _min: Binh_luanMinAggregateOutputType | null
    _max: Binh_luanMaxAggregateOutputType | null
  }

  type GetBinh_luanGroupByPayload<T extends binh_luanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Binh_luanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Binh_luanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Binh_luanGroupByOutputType[P]>
            : GetScalarType<T[P], Binh_luanGroupByOutputType[P]>
        }
      >
    >


  export type binh_luanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    binh_luan_id?: boolean
    nguoi_dung_id?: boolean
    hinh_id?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
    nguoi_dung?: boolean | binh_luan$nguoi_dungArgs<ExtArgs>
  }, ExtArgs["result"]["binh_luan"]>



  export type binh_luanSelectScalar = {
    binh_luan_id?: boolean
    nguoi_dung_id?: boolean
    hinh_id?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
  }

  export type binh_luanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"binh_luan_id" | "nguoi_dung_id" | "hinh_id" | "ngay_binh_luan" | "noi_dung", ExtArgs["result"]["binh_luan"]>
  export type binh_luanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nguoi_dung?: boolean | binh_luan$nguoi_dungArgs<ExtArgs>
  }

  export type $binh_luanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "binh_luan"
    objects: {
      nguoi_dung: Prisma.$nguoi_dungPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      binh_luan_id: number
      nguoi_dung_id: number | null
      hinh_id: number | null
      ngay_binh_luan: Date | null
      noi_dung: string | null
    }, ExtArgs["result"]["binh_luan"]>
    composites: {}
  }

  type binh_luanGetPayload<S extends boolean | null | undefined | binh_luanDefaultArgs> = $Result.GetResult<Prisma.$binh_luanPayload, S>

  type binh_luanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<binh_luanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Binh_luanCountAggregateInputType | true
    }

  export interface binh_luanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['binh_luan'], meta: { name: 'binh_luan' } }
    /**
     * Find zero or one Binh_luan that matches the filter.
     * @param {binh_luanFindUniqueArgs} args - Arguments to find a Binh_luan
     * @example
     * // Get one Binh_luan
     * const binh_luan = await prisma.binh_luan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends binh_luanFindUniqueArgs>(args: SelectSubset<T, binh_luanFindUniqueArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Binh_luan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {binh_luanFindUniqueOrThrowArgs} args - Arguments to find a Binh_luan
     * @example
     * // Get one Binh_luan
     * const binh_luan = await prisma.binh_luan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends binh_luanFindUniqueOrThrowArgs>(args: SelectSubset<T, binh_luanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binh_luan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanFindFirstArgs} args - Arguments to find a Binh_luan
     * @example
     * // Get one Binh_luan
     * const binh_luan = await prisma.binh_luan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends binh_luanFindFirstArgs>(args?: SelectSubset<T, binh_luanFindFirstArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binh_luan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanFindFirstOrThrowArgs} args - Arguments to find a Binh_luan
     * @example
     * // Get one Binh_luan
     * const binh_luan = await prisma.binh_luan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends binh_luanFindFirstOrThrowArgs>(args?: SelectSubset<T, binh_luanFindFirstOrThrowArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Binh_luans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Binh_luans
     * const binh_luans = await prisma.binh_luan.findMany()
     * 
     * // Get first 10 Binh_luans
     * const binh_luans = await prisma.binh_luan.findMany({ take: 10 })
     * 
     * // Only select the `binh_luan_id`
     * const binh_luanWithBinh_luan_idOnly = await prisma.binh_luan.findMany({ select: { binh_luan_id: true } })
     * 
     */
    findMany<T extends binh_luanFindManyArgs>(args?: SelectSubset<T, binh_luanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Binh_luan.
     * @param {binh_luanCreateArgs} args - Arguments to create a Binh_luan.
     * @example
     * // Create one Binh_luan
     * const Binh_luan = await prisma.binh_luan.create({
     *   data: {
     *     // ... data to create a Binh_luan
     *   }
     * })
     * 
     */
    create<T extends binh_luanCreateArgs>(args: SelectSubset<T, binh_luanCreateArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Binh_luans.
     * @param {binh_luanCreateManyArgs} args - Arguments to create many Binh_luans.
     * @example
     * // Create many Binh_luans
     * const binh_luan = await prisma.binh_luan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends binh_luanCreateManyArgs>(args?: SelectSubset<T, binh_luanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Binh_luan.
     * @param {binh_luanDeleteArgs} args - Arguments to delete one Binh_luan.
     * @example
     * // Delete one Binh_luan
     * const Binh_luan = await prisma.binh_luan.delete({
     *   where: {
     *     // ... filter to delete one Binh_luan
     *   }
     * })
     * 
     */
    delete<T extends binh_luanDeleteArgs>(args: SelectSubset<T, binh_luanDeleteArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Binh_luan.
     * @param {binh_luanUpdateArgs} args - Arguments to update one Binh_luan.
     * @example
     * // Update one Binh_luan
     * const binh_luan = await prisma.binh_luan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends binh_luanUpdateArgs>(args: SelectSubset<T, binh_luanUpdateArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Binh_luans.
     * @param {binh_luanDeleteManyArgs} args - Arguments to filter Binh_luans to delete.
     * @example
     * // Delete a few Binh_luans
     * const { count } = await prisma.binh_luan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends binh_luanDeleteManyArgs>(args?: SelectSubset<T, binh_luanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Binh_luans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Binh_luans
     * const binh_luan = await prisma.binh_luan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends binh_luanUpdateManyArgs>(args: SelectSubset<T, binh_luanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Binh_luan.
     * @param {binh_luanUpsertArgs} args - Arguments to update or create a Binh_luan.
     * @example
     * // Update or create a Binh_luan
     * const binh_luan = await prisma.binh_luan.upsert({
     *   create: {
     *     // ... data to create a Binh_luan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Binh_luan we want to update
     *   }
     * })
     */
    upsert<T extends binh_luanUpsertArgs>(args: SelectSubset<T, binh_luanUpsertArgs<ExtArgs>>): Prisma__binh_luanClient<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Binh_luans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanCountArgs} args - Arguments to filter Binh_luans to count.
     * @example
     * // Count the number of Binh_luans
     * const count = await prisma.binh_luan.count({
     *   where: {
     *     // ... the filter for the Binh_luans we want to count
     *   }
     * })
    **/
    count<T extends binh_luanCountArgs>(
      args?: Subset<T, binh_luanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Binh_luanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Binh_luan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Binh_luanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Binh_luanAggregateArgs>(args: Subset<T, Binh_luanAggregateArgs>): Prisma.PrismaPromise<GetBinh_luanAggregateType<T>>

    /**
     * Group by Binh_luan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {binh_luanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends binh_luanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: binh_luanGroupByArgs['orderBy'] }
        : { orderBy?: binh_luanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, binh_luanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinh_luanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the binh_luan model
   */
  readonly fields: binh_luanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for binh_luan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__binh_luanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nguoi_dung<T extends binh_luan$nguoi_dungArgs<ExtArgs> = {}>(args?: Subset<T, binh_luan$nguoi_dungArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the binh_luan model
   */
  interface binh_luanFieldRefs {
    readonly binh_luan_id: FieldRef<"binh_luan", 'Int'>
    readonly nguoi_dung_id: FieldRef<"binh_luan", 'Int'>
    readonly hinh_id: FieldRef<"binh_luan", 'Int'>
    readonly ngay_binh_luan: FieldRef<"binh_luan", 'DateTime'>
    readonly noi_dung: FieldRef<"binh_luan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * binh_luan findUnique
   */
  export type binh_luanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter, which binh_luan to fetch.
     */
    where: binh_luanWhereUniqueInput
  }

  /**
   * binh_luan findUniqueOrThrow
   */
  export type binh_luanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter, which binh_luan to fetch.
     */
    where: binh_luanWhereUniqueInput
  }

  /**
   * binh_luan findFirst
   */
  export type binh_luanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter, which binh_luan to fetch.
     */
    where?: binh_luanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of binh_luans to fetch.
     */
    orderBy?: binh_luanOrderByWithRelationInput | binh_luanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for binh_luans.
     */
    cursor?: binh_luanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` binh_luans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` binh_luans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of binh_luans.
     */
    distinct?: Binh_luanScalarFieldEnum | Binh_luanScalarFieldEnum[]
  }

  /**
   * binh_luan findFirstOrThrow
   */
  export type binh_luanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter, which binh_luan to fetch.
     */
    where?: binh_luanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of binh_luans to fetch.
     */
    orderBy?: binh_luanOrderByWithRelationInput | binh_luanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for binh_luans.
     */
    cursor?: binh_luanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` binh_luans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` binh_luans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of binh_luans.
     */
    distinct?: Binh_luanScalarFieldEnum | Binh_luanScalarFieldEnum[]
  }

  /**
   * binh_luan findMany
   */
  export type binh_luanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter, which binh_luans to fetch.
     */
    where?: binh_luanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of binh_luans to fetch.
     */
    orderBy?: binh_luanOrderByWithRelationInput | binh_luanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing binh_luans.
     */
    cursor?: binh_luanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` binh_luans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` binh_luans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of binh_luans.
     */
    distinct?: Binh_luanScalarFieldEnum | Binh_luanScalarFieldEnum[]
  }

  /**
   * binh_luan create
   */
  export type binh_luanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * The data needed to create a binh_luan.
     */
    data?: XOR<binh_luanCreateInput, binh_luanUncheckedCreateInput>
  }

  /**
   * binh_luan createMany
   */
  export type binh_luanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many binh_luans.
     */
    data: binh_luanCreateManyInput | binh_luanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * binh_luan update
   */
  export type binh_luanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * The data needed to update a binh_luan.
     */
    data: XOR<binh_luanUpdateInput, binh_luanUncheckedUpdateInput>
    /**
     * Choose, which binh_luan to update.
     */
    where: binh_luanWhereUniqueInput
  }

  /**
   * binh_luan updateMany
   */
  export type binh_luanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update binh_luans.
     */
    data: XOR<binh_luanUpdateManyMutationInput, binh_luanUncheckedUpdateManyInput>
    /**
     * Filter which binh_luans to update
     */
    where?: binh_luanWhereInput
    /**
     * Limit how many binh_luans to update.
     */
    limit?: number
  }

  /**
   * binh_luan upsert
   */
  export type binh_luanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * The filter to search for the binh_luan to update in case it exists.
     */
    where: binh_luanWhereUniqueInput
    /**
     * In case the binh_luan found by the `where` argument doesn't exist, create a new binh_luan with this data.
     */
    create: XOR<binh_luanCreateInput, binh_luanUncheckedCreateInput>
    /**
     * In case the binh_luan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<binh_luanUpdateInput, binh_luanUncheckedUpdateInput>
  }

  /**
   * binh_luan delete
   */
  export type binh_luanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    /**
     * Filter which binh_luan to delete.
     */
    where: binh_luanWhereUniqueInput
  }

  /**
   * binh_luan deleteMany
   */
  export type binh_luanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which binh_luans to delete
     */
    where?: binh_luanWhereInput
    /**
     * Limit how many binh_luans to delete.
     */
    limit?: number
  }

  /**
   * binh_luan.nguoi_dung
   */
  export type binh_luan$nguoi_dungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    where?: nguoi_dungWhereInput
  }

  /**
   * binh_luan without action
   */
  export type binh_luanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
  }


  /**
   * Model hinh_anh
   */

  export type AggregateHinh_anh = {
    _count: Hinh_anhCountAggregateOutputType | null
    _avg: Hinh_anhAvgAggregateOutputType | null
    _sum: Hinh_anhSumAggregateOutputType | null
    _min: Hinh_anhMinAggregateOutputType | null
    _max: Hinh_anhMaxAggregateOutputType | null
  }

  export type Hinh_anhAvgAggregateOutputType = {
    hinh_id: number | null
    nguoi_dung_id: number | null
  }

  export type Hinh_anhSumAggregateOutputType = {
    hinh_id: number | null
    nguoi_dung_id: number | null
  }

  export type Hinh_anhMinAggregateOutputType = {
    hinh_id: number | null
    ten_hinh: string | null
    duong_dan: string | null
    mo_ta: string | null
    nguoi_dung_id: number | null
  }

  export type Hinh_anhMaxAggregateOutputType = {
    hinh_id: number | null
    ten_hinh: string | null
    duong_dan: string | null
    mo_ta: string | null
    nguoi_dung_id: number | null
  }

  export type Hinh_anhCountAggregateOutputType = {
    hinh_id: number
    ten_hinh: number
    duong_dan: number
    mo_ta: number
    nguoi_dung_id: number
    _all: number
  }


  export type Hinh_anhAvgAggregateInputType = {
    hinh_id?: true
    nguoi_dung_id?: true
  }

  export type Hinh_anhSumAggregateInputType = {
    hinh_id?: true
    nguoi_dung_id?: true
  }

  export type Hinh_anhMinAggregateInputType = {
    hinh_id?: true
    ten_hinh?: true
    duong_dan?: true
    mo_ta?: true
    nguoi_dung_id?: true
  }

  export type Hinh_anhMaxAggregateInputType = {
    hinh_id?: true
    ten_hinh?: true
    duong_dan?: true
    mo_ta?: true
    nguoi_dung_id?: true
  }

  export type Hinh_anhCountAggregateInputType = {
    hinh_id?: true
    ten_hinh?: true
    duong_dan?: true
    mo_ta?: true
    nguoi_dung_id?: true
    _all?: true
  }

  export type Hinh_anhAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hinh_anh to aggregate.
     */
    where?: hinh_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hinh_anhs to fetch.
     */
    orderBy?: hinh_anhOrderByWithRelationInput | hinh_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hinh_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hinh_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hinh_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hinh_anhs
    **/
    _count?: true | Hinh_anhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hinh_anhAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hinh_anhSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hinh_anhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hinh_anhMaxAggregateInputType
  }

  export type GetHinh_anhAggregateType<T extends Hinh_anhAggregateArgs> = {
        [P in keyof T & keyof AggregateHinh_anh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHinh_anh[P]>
      : GetScalarType<T[P], AggregateHinh_anh[P]>
  }




  export type hinh_anhGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hinh_anhWhereInput
    orderBy?: hinh_anhOrderByWithAggregationInput | hinh_anhOrderByWithAggregationInput[]
    by: Hinh_anhScalarFieldEnum[] | Hinh_anhScalarFieldEnum
    having?: hinh_anhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hinh_anhCountAggregateInputType | true
    _avg?: Hinh_anhAvgAggregateInputType
    _sum?: Hinh_anhSumAggregateInputType
    _min?: Hinh_anhMinAggregateInputType
    _max?: Hinh_anhMaxAggregateInputType
  }

  export type Hinh_anhGroupByOutputType = {
    hinh_id: number
    ten_hinh: string | null
    duong_dan: string | null
    mo_ta: string | null
    nguoi_dung_id: number | null
    _count: Hinh_anhCountAggregateOutputType | null
    _avg: Hinh_anhAvgAggregateOutputType | null
    _sum: Hinh_anhSumAggregateOutputType | null
    _min: Hinh_anhMinAggregateOutputType | null
    _max: Hinh_anhMaxAggregateOutputType | null
  }

  type GetHinh_anhGroupByPayload<T extends hinh_anhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hinh_anhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hinh_anhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hinh_anhGroupByOutputType[P]>
            : GetScalarType<T[P], Hinh_anhGroupByOutputType[P]>
        }
      >
    >


  export type hinh_anhSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hinh_id?: boolean
    ten_hinh?: boolean
    duong_dan?: boolean
    mo_ta?: boolean
    nguoi_dung_id?: boolean
    nguoi_dung?: boolean | hinh_anh$nguoi_dungArgs<ExtArgs>
    luu_anh?: boolean | hinh_anh$luu_anhArgs<ExtArgs>
    _count?: boolean | Hinh_anhCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hinh_anh"]>



  export type hinh_anhSelectScalar = {
    hinh_id?: boolean
    ten_hinh?: boolean
    duong_dan?: boolean
    mo_ta?: boolean
    nguoi_dung_id?: boolean
  }

  export type hinh_anhOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hinh_id" | "ten_hinh" | "duong_dan" | "mo_ta" | "nguoi_dung_id", ExtArgs["result"]["hinh_anh"]>
  export type hinh_anhInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nguoi_dung?: boolean | hinh_anh$nguoi_dungArgs<ExtArgs>
    luu_anh?: boolean | hinh_anh$luu_anhArgs<ExtArgs>
    _count?: boolean | Hinh_anhCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $hinh_anhPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hinh_anh"
    objects: {
      nguoi_dung: Prisma.$nguoi_dungPayload<ExtArgs> | null
      luu_anh: Prisma.$luu_anhPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hinh_id: number
      ten_hinh: string | null
      duong_dan: string | null
      mo_ta: string | null
      nguoi_dung_id: number | null
    }, ExtArgs["result"]["hinh_anh"]>
    composites: {}
  }

  type hinh_anhGetPayload<S extends boolean | null | undefined | hinh_anhDefaultArgs> = $Result.GetResult<Prisma.$hinh_anhPayload, S>

  type hinh_anhCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hinh_anhFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hinh_anhCountAggregateInputType | true
    }

  export interface hinh_anhDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hinh_anh'], meta: { name: 'hinh_anh' } }
    /**
     * Find zero or one Hinh_anh that matches the filter.
     * @param {hinh_anhFindUniqueArgs} args - Arguments to find a Hinh_anh
     * @example
     * // Get one Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hinh_anhFindUniqueArgs>(args: SelectSubset<T, hinh_anhFindUniqueArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hinh_anh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hinh_anhFindUniqueOrThrowArgs} args - Arguments to find a Hinh_anh
     * @example
     * // Get one Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hinh_anhFindUniqueOrThrowArgs>(args: SelectSubset<T, hinh_anhFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hinh_anh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhFindFirstArgs} args - Arguments to find a Hinh_anh
     * @example
     * // Get one Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hinh_anhFindFirstArgs>(args?: SelectSubset<T, hinh_anhFindFirstArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hinh_anh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhFindFirstOrThrowArgs} args - Arguments to find a Hinh_anh
     * @example
     * // Get one Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hinh_anhFindFirstOrThrowArgs>(args?: SelectSubset<T, hinh_anhFindFirstOrThrowArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hinh_anhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hinh_anhs
     * const hinh_anhs = await prisma.hinh_anh.findMany()
     * 
     * // Get first 10 Hinh_anhs
     * const hinh_anhs = await prisma.hinh_anh.findMany({ take: 10 })
     * 
     * // Only select the `hinh_id`
     * const hinh_anhWithHinh_idOnly = await prisma.hinh_anh.findMany({ select: { hinh_id: true } })
     * 
     */
    findMany<T extends hinh_anhFindManyArgs>(args?: SelectSubset<T, hinh_anhFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hinh_anh.
     * @param {hinh_anhCreateArgs} args - Arguments to create a Hinh_anh.
     * @example
     * // Create one Hinh_anh
     * const Hinh_anh = await prisma.hinh_anh.create({
     *   data: {
     *     // ... data to create a Hinh_anh
     *   }
     * })
     * 
     */
    create<T extends hinh_anhCreateArgs>(args: SelectSubset<T, hinh_anhCreateArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hinh_anhs.
     * @param {hinh_anhCreateManyArgs} args - Arguments to create many Hinh_anhs.
     * @example
     * // Create many Hinh_anhs
     * const hinh_anh = await prisma.hinh_anh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hinh_anhCreateManyArgs>(args?: SelectSubset<T, hinh_anhCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hinh_anh.
     * @param {hinh_anhDeleteArgs} args - Arguments to delete one Hinh_anh.
     * @example
     * // Delete one Hinh_anh
     * const Hinh_anh = await prisma.hinh_anh.delete({
     *   where: {
     *     // ... filter to delete one Hinh_anh
     *   }
     * })
     * 
     */
    delete<T extends hinh_anhDeleteArgs>(args: SelectSubset<T, hinh_anhDeleteArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hinh_anh.
     * @param {hinh_anhUpdateArgs} args - Arguments to update one Hinh_anh.
     * @example
     * // Update one Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hinh_anhUpdateArgs>(args: SelectSubset<T, hinh_anhUpdateArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hinh_anhs.
     * @param {hinh_anhDeleteManyArgs} args - Arguments to filter Hinh_anhs to delete.
     * @example
     * // Delete a few Hinh_anhs
     * const { count } = await prisma.hinh_anh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hinh_anhDeleteManyArgs>(args?: SelectSubset<T, hinh_anhDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hinh_anhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hinh_anhs
     * const hinh_anh = await prisma.hinh_anh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hinh_anhUpdateManyArgs>(args: SelectSubset<T, hinh_anhUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hinh_anh.
     * @param {hinh_anhUpsertArgs} args - Arguments to update or create a Hinh_anh.
     * @example
     * // Update or create a Hinh_anh
     * const hinh_anh = await prisma.hinh_anh.upsert({
     *   create: {
     *     // ... data to create a Hinh_anh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hinh_anh we want to update
     *   }
     * })
     */
    upsert<T extends hinh_anhUpsertArgs>(args: SelectSubset<T, hinh_anhUpsertArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hinh_anhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhCountArgs} args - Arguments to filter Hinh_anhs to count.
     * @example
     * // Count the number of Hinh_anhs
     * const count = await prisma.hinh_anh.count({
     *   where: {
     *     // ... the filter for the Hinh_anhs we want to count
     *   }
     * })
    **/
    count<T extends hinh_anhCountArgs>(
      args?: Subset<T, hinh_anhCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hinh_anhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hinh_anh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hinh_anhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hinh_anhAggregateArgs>(args: Subset<T, Hinh_anhAggregateArgs>): Prisma.PrismaPromise<GetHinh_anhAggregateType<T>>

    /**
     * Group by Hinh_anh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hinh_anhGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hinh_anhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hinh_anhGroupByArgs['orderBy'] }
        : { orderBy?: hinh_anhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hinh_anhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHinh_anhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hinh_anh model
   */
  readonly fields: hinh_anhFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hinh_anh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hinh_anhClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nguoi_dung<T extends hinh_anh$nguoi_dungArgs<ExtArgs> = {}>(args?: Subset<T, hinh_anh$nguoi_dungArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    luu_anh<T extends hinh_anh$luu_anhArgs<ExtArgs> = {}>(args?: Subset<T, hinh_anh$luu_anhArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hinh_anh model
   */
  interface hinh_anhFieldRefs {
    readonly hinh_id: FieldRef<"hinh_anh", 'Int'>
    readonly ten_hinh: FieldRef<"hinh_anh", 'String'>
    readonly duong_dan: FieldRef<"hinh_anh", 'String'>
    readonly mo_ta: FieldRef<"hinh_anh", 'String'>
    readonly nguoi_dung_id: FieldRef<"hinh_anh", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hinh_anh findUnique
   */
  export type hinh_anhFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter, which hinh_anh to fetch.
     */
    where: hinh_anhWhereUniqueInput
  }

  /**
   * hinh_anh findUniqueOrThrow
   */
  export type hinh_anhFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter, which hinh_anh to fetch.
     */
    where: hinh_anhWhereUniqueInput
  }

  /**
   * hinh_anh findFirst
   */
  export type hinh_anhFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter, which hinh_anh to fetch.
     */
    where?: hinh_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hinh_anhs to fetch.
     */
    orderBy?: hinh_anhOrderByWithRelationInput | hinh_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hinh_anhs.
     */
    cursor?: hinh_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hinh_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hinh_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hinh_anhs.
     */
    distinct?: Hinh_anhScalarFieldEnum | Hinh_anhScalarFieldEnum[]
  }

  /**
   * hinh_anh findFirstOrThrow
   */
  export type hinh_anhFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter, which hinh_anh to fetch.
     */
    where?: hinh_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hinh_anhs to fetch.
     */
    orderBy?: hinh_anhOrderByWithRelationInput | hinh_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hinh_anhs.
     */
    cursor?: hinh_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hinh_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hinh_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hinh_anhs.
     */
    distinct?: Hinh_anhScalarFieldEnum | Hinh_anhScalarFieldEnum[]
  }

  /**
   * hinh_anh findMany
   */
  export type hinh_anhFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter, which hinh_anhs to fetch.
     */
    where?: hinh_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hinh_anhs to fetch.
     */
    orderBy?: hinh_anhOrderByWithRelationInput | hinh_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hinh_anhs.
     */
    cursor?: hinh_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hinh_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hinh_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hinh_anhs.
     */
    distinct?: Hinh_anhScalarFieldEnum | Hinh_anhScalarFieldEnum[]
  }

  /**
   * hinh_anh create
   */
  export type hinh_anhCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * The data needed to create a hinh_anh.
     */
    data?: XOR<hinh_anhCreateInput, hinh_anhUncheckedCreateInput>
  }

  /**
   * hinh_anh createMany
   */
  export type hinh_anhCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hinh_anhs.
     */
    data: hinh_anhCreateManyInput | hinh_anhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hinh_anh update
   */
  export type hinh_anhUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * The data needed to update a hinh_anh.
     */
    data: XOR<hinh_anhUpdateInput, hinh_anhUncheckedUpdateInput>
    /**
     * Choose, which hinh_anh to update.
     */
    where: hinh_anhWhereUniqueInput
  }

  /**
   * hinh_anh updateMany
   */
  export type hinh_anhUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hinh_anhs.
     */
    data: XOR<hinh_anhUpdateManyMutationInput, hinh_anhUncheckedUpdateManyInput>
    /**
     * Filter which hinh_anhs to update
     */
    where?: hinh_anhWhereInput
    /**
     * Limit how many hinh_anhs to update.
     */
    limit?: number
  }

  /**
   * hinh_anh upsert
   */
  export type hinh_anhUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * The filter to search for the hinh_anh to update in case it exists.
     */
    where: hinh_anhWhereUniqueInput
    /**
     * In case the hinh_anh found by the `where` argument doesn't exist, create a new hinh_anh with this data.
     */
    create: XOR<hinh_anhCreateInput, hinh_anhUncheckedCreateInput>
    /**
     * In case the hinh_anh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hinh_anhUpdateInput, hinh_anhUncheckedUpdateInput>
  }

  /**
   * hinh_anh delete
   */
  export type hinh_anhDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    /**
     * Filter which hinh_anh to delete.
     */
    where: hinh_anhWhereUniqueInput
  }

  /**
   * hinh_anh deleteMany
   */
  export type hinh_anhDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hinh_anhs to delete
     */
    where?: hinh_anhWhereInput
    /**
     * Limit how many hinh_anhs to delete.
     */
    limit?: number
  }

  /**
   * hinh_anh.nguoi_dung
   */
  export type hinh_anh$nguoi_dungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    where?: nguoi_dungWhereInput
  }

  /**
   * hinh_anh.luu_anh
   */
  export type hinh_anh$luu_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    where?: luu_anhWhereInput
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    cursor?: luu_anhWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Luu_anhScalarFieldEnum | Luu_anhScalarFieldEnum[]
  }

  /**
   * hinh_anh without action
   */
  export type hinh_anhDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
  }


  /**
   * Model luu_anh
   */

  export type AggregateLuu_anh = {
    _count: Luu_anhCountAggregateOutputType | null
    _avg: Luu_anhAvgAggregateOutputType | null
    _sum: Luu_anhSumAggregateOutputType | null
    _min: Luu_anhMinAggregateOutputType | null
    _max: Luu_anhMaxAggregateOutputType | null
  }

  export type Luu_anhAvgAggregateOutputType = {
    nguoi_dung_id: number | null
    hinh_id: number | null
  }

  export type Luu_anhSumAggregateOutputType = {
    nguoi_dung_id: number | null
    hinh_id: number | null
  }

  export type Luu_anhMinAggregateOutputType = {
    nguoi_dung_id: number | null
    hinh_id: number | null
    ngay_luu: Date | null
  }

  export type Luu_anhMaxAggregateOutputType = {
    nguoi_dung_id: number | null
    hinh_id: number | null
    ngay_luu: Date | null
  }

  export type Luu_anhCountAggregateOutputType = {
    nguoi_dung_id: number
    hinh_id: number
    ngay_luu: number
    _all: number
  }


  export type Luu_anhAvgAggregateInputType = {
    nguoi_dung_id?: true
    hinh_id?: true
  }

  export type Luu_anhSumAggregateInputType = {
    nguoi_dung_id?: true
    hinh_id?: true
  }

  export type Luu_anhMinAggregateInputType = {
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_luu?: true
  }

  export type Luu_anhMaxAggregateInputType = {
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_luu?: true
  }

  export type Luu_anhCountAggregateInputType = {
    nguoi_dung_id?: true
    hinh_id?: true
    ngay_luu?: true
    _all?: true
  }

  export type Luu_anhAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which luu_anh to aggregate.
     */
    where?: luu_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luu_anhs to fetch.
     */
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luu_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luu_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luu_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luu_anhs
    **/
    _count?: true | Luu_anhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Luu_anhAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Luu_anhSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luu_anhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luu_anhMaxAggregateInputType
  }

  export type GetLuu_anhAggregateType<T extends Luu_anhAggregateArgs> = {
        [P in keyof T & keyof AggregateLuu_anh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuu_anh[P]>
      : GetScalarType<T[P], AggregateLuu_anh[P]>
  }




  export type luu_anhGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: luu_anhWhereInput
    orderBy?: luu_anhOrderByWithAggregationInput | luu_anhOrderByWithAggregationInput[]
    by: Luu_anhScalarFieldEnum[] | Luu_anhScalarFieldEnum
    having?: luu_anhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luu_anhCountAggregateInputType | true
    _avg?: Luu_anhAvgAggregateInputType
    _sum?: Luu_anhSumAggregateInputType
    _min?: Luu_anhMinAggregateInputType
    _max?: Luu_anhMaxAggregateInputType
  }

  export type Luu_anhGroupByOutputType = {
    nguoi_dung_id: number
    hinh_id: number
    ngay_luu: Date | null
    _count: Luu_anhCountAggregateOutputType | null
    _avg: Luu_anhAvgAggregateOutputType | null
    _sum: Luu_anhSumAggregateOutputType | null
    _min: Luu_anhMinAggregateOutputType | null
    _max: Luu_anhMaxAggregateOutputType | null
  }

  type GetLuu_anhGroupByPayload<T extends luu_anhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Luu_anhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luu_anhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luu_anhGroupByOutputType[P]>
            : GetScalarType<T[P], Luu_anhGroupByOutputType[P]>
        }
      >
    >


  export type luu_anhSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nguoi_dung_id?: boolean
    hinh_id?: boolean
    ngay_luu?: boolean
    nguoi_dung?: boolean | nguoi_dungDefaultArgs<ExtArgs>
    hinh_anh?: boolean | hinh_anhDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["luu_anh"]>



  export type luu_anhSelectScalar = {
    nguoi_dung_id?: boolean
    hinh_id?: boolean
    ngay_luu?: boolean
  }

  export type luu_anhOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nguoi_dung_id" | "hinh_id" | "ngay_luu", ExtArgs["result"]["luu_anh"]>
  export type luu_anhInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nguoi_dung?: boolean | nguoi_dungDefaultArgs<ExtArgs>
    hinh_anh?: boolean | hinh_anhDefaultArgs<ExtArgs>
  }

  export type $luu_anhPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "luu_anh"
    objects: {
      nguoi_dung: Prisma.$nguoi_dungPayload<ExtArgs>
      hinh_anh: Prisma.$hinh_anhPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nguoi_dung_id: number
      hinh_id: number
      ngay_luu: Date | null
    }, ExtArgs["result"]["luu_anh"]>
    composites: {}
  }

  type luu_anhGetPayload<S extends boolean | null | undefined | luu_anhDefaultArgs> = $Result.GetResult<Prisma.$luu_anhPayload, S>

  type luu_anhCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<luu_anhFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Luu_anhCountAggregateInputType | true
    }

  export interface luu_anhDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['luu_anh'], meta: { name: 'luu_anh' } }
    /**
     * Find zero or one Luu_anh that matches the filter.
     * @param {luu_anhFindUniqueArgs} args - Arguments to find a Luu_anh
     * @example
     * // Get one Luu_anh
     * const luu_anh = await prisma.luu_anh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends luu_anhFindUniqueArgs>(args: SelectSubset<T, luu_anhFindUniqueArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Luu_anh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {luu_anhFindUniqueOrThrowArgs} args - Arguments to find a Luu_anh
     * @example
     * // Get one Luu_anh
     * const luu_anh = await prisma.luu_anh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends luu_anhFindUniqueOrThrowArgs>(args: SelectSubset<T, luu_anhFindUniqueOrThrowArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Luu_anh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhFindFirstArgs} args - Arguments to find a Luu_anh
     * @example
     * // Get one Luu_anh
     * const luu_anh = await prisma.luu_anh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends luu_anhFindFirstArgs>(args?: SelectSubset<T, luu_anhFindFirstArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Luu_anh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhFindFirstOrThrowArgs} args - Arguments to find a Luu_anh
     * @example
     * // Get one Luu_anh
     * const luu_anh = await prisma.luu_anh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends luu_anhFindFirstOrThrowArgs>(args?: SelectSubset<T, luu_anhFindFirstOrThrowArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Luu_anhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luu_anhs
     * const luu_anhs = await prisma.luu_anh.findMany()
     * 
     * // Get first 10 Luu_anhs
     * const luu_anhs = await prisma.luu_anh.findMany({ take: 10 })
     * 
     * // Only select the `nguoi_dung_id`
     * const luu_anhWithNguoi_dung_idOnly = await prisma.luu_anh.findMany({ select: { nguoi_dung_id: true } })
     * 
     */
    findMany<T extends luu_anhFindManyArgs>(args?: SelectSubset<T, luu_anhFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Luu_anh.
     * @param {luu_anhCreateArgs} args - Arguments to create a Luu_anh.
     * @example
     * // Create one Luu_anh
     * const Luu_anh = await prisma.luu_anh.create({
     *   data: {
     *     // ... data to create a Luu_anh
     *   }
     * })
     * 
     */
    create<T extends luu_anhCreateArgs>(args: SelectSubset<T, luu_anhCreateArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Luu_anhs.
     * @param {luu_anhCreateManyArgs} args - Arguments to create many Luu_anhs.
     * @example
     * // Create many Luu_anhs
     * const luu_anh = await prisma.luu_anh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends luu_anhCreateManyArgs>(args?: SelectSubset<T, luu_anhCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luu_anh.
     * @param {luu_anhDeleteArgs} args - Arguments to delete one Luu_anh.
     * @example
     * // Delete one Luu_anh
     * const Luu_anh = await prisma.luu_anh.delete({
     *   where: {
     *     // ... filter to delete one Luu_anh
     *   }
     * })
     * 
     */
    delete<T extends luu_anhDeleteArgs>(args: SelectSubset<T, luu_anhDeleteArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Luu_anh.
     * @param {luu_anhUpdateArgs} args - Arguments to update one Luu_anh.
     * @example
     * // Update one Luu_anh
     * const luu_anh = await prisma.luu_anh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends luu_anhUpdateArgs>(args: SelectSubset<T, luu_anhUpdateArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Luu_anhs.
     * @param {luu_anhDeleteManyArgs} args - Arguments to filter Luu_anhs to delete.
     * @example
     * // Delete a few Luu_anhs
     * const { count } = await prisma.luu_anh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends luu_anhDeleteManyArgs>(args?: SelectSubset<T, luu_anhDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luu_anhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luu_anhs
     * const luu_anh = await prisma.luu_anh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends luu_anhUpdateManyArgs>(args: SelectSubset<T, luu_anhUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luu_anh.
     * @param {luu_anhUpsertArgs} args - Arguments to update or create a Luu_anh.
     * @example
     * // Update or create a Luu_anh
     * const luu_anh = await prisma.luu_anh.upsert({
     *   create: {
     *     // ... data to create a Luu_anh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luu_anh we want to update
     *   }
     * })
     */
    upsert<T extends luu_anhUpsertArgs>(args: SelectSubset<T, luu_anhUpsertArgs<ExtArgs>>): Prisma__luu_anhClient<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Luu_anhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhCountArgs} args - Arguments to filter Luu_anhs to count.
     * @example
     * // Count the number of Luu_anhs
     * const count = await prisma.luu_anh.count({
     *   where: {
     *     // ... the filter for the Luu_anhs we want to count
     *   }
     * })
    **/
    count<T extends luu_anhCountArgs>(
      args?: Subset<T, luu_anhCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luu_anhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luu_anh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luu_anhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Luu_anhAggregateArgs>(args: Subset<T, Luu_anhAggregateArgs>): Prisma.PrismaPromise<GetLuu_anhAggregateType<T>>

    /**
     * Group by Luu_anh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luu_anhGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends luu_anhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: luu_anhGroupByArgs['orderBy'] }
        : { orderBy?: luu_anhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, luu_anhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuu_anhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the luu_anh model
   */
  readonly fields: luu_anhFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for luu_anh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__luu_anhClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nguoi_dung<T extends nguoi_dungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dungDefaultArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hinh_anh<T extends hinh_anhDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hinh_anhDefaultArgs<ExtArgs>>): Prisma__hinh_anhClient<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the luu_anh model
   */
  interface luu_anhFieldRefs {
    readonly nguoi_dung_id: FieldRef<"luu_anh", 'Int'>
    readonly hinh_id: FieldRef<"luu_anh", 'Int'>
    readonly ngay_luu: FieldRef<"luu_anh", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * luu_anh findUnique
   */
  export type luu_anhFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter, which luu_anh to fetch.
     */
    where: luu_anhWhereUniqueInput
  }

  /**
   * luu_anh findUniqueOrThrow
   */
  export type luu_anhFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter, which luu_anh to fetch.
     */
    where: luu_anhWhereUniqueInput
  }

  /**
   * luu_anh findFirst
   */
  export type luu_anhFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter, which luu_anh to fetch.
     */
    where?: luu_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luu_anhs to fetch.
     */
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luu_anhs.
     */
    cursor?: luu_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luu_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luu_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luu_anhs.
     */
    distinct?: Luu_anhScalarFieldEnum | Luu_anhScalarFieldEnum[]
  }

  /**
   * luu_anh findFirstOrThrow
   */
  export type luu_anhFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter, which luu_anh to fetch.
     */
    where?: luu_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luu_anhs to fetch.
     */
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luu_anhs.
     */
    cursor?: luu_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luu_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luu_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luu_anhs.
     */
    distinct?: Luu_anhScalarFieldEnum | Luu_anhScalarFieldEnum[]
  }

  /**
   * luu_anh findMany
   */
  export type luu_anhFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter, which luu_anhs to fetch.
     */
    where?: luu_anhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luu_anhs to fetch.
     */
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luu_anhs.
     */
    cursor?: luu_anhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luu_anhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luu_anhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luu_anhs.
     */
    distinct?: Luu_anhScalarFieldEnum | Luu_anhScalarFieldEnum[]
  }

  /**
   * luu_anh create
   */
  export type luu_anhCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * The data needed to create a luu_anh.
     */
    data: XOR<luu_anhCreateInput, luu_anhUncheckedCreateInput>
  }

  /**
   * luu_anh createMany
   */
  export type luu_anhCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many luu_anhs.
     */
    data: luu_anhCreateManyInput | luu_anhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * luu_anh update
   */
  export type luu_anhUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * The data needed to update a luu_anh.
     */
    data: XOR<luu_anhUpdateInput, luu_anhUncheckedUpdateInput>
    /**
     * Choose, which luu_anh to update.
     */
    where: luu_anhWhereUniqueInput
  }

  /**
   * luu_anh updateMany
   */
  export type luu_anhUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update luu_anhs.
     */
    data: XOR<luu_anhUpdateManyMutationInput, luu_anhUncheckedUpdateManyInput>
    /**
     * Filter which luu_anhs to update
     */
    where?: luu_anhWhereInput
    /**
     * Limit how many luu_anhs to update.
     */
    limit?: number
  }

  /**
   * luu_anh upsert
   */
  export type luu_anhUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * The filter to search for the luu_anh to update in case it exists.
     */
    where: luu_anhWhereUniqueInput
    /**
     * In case the luu_anh found by the `where` argument doesn't exist, create a new luu_anh with this data.
     */
    create: XOR<luu_anhCreateInput, luu_anhUncheckedCreateInput>
    /**
     * In case the luu_anh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luu_anhUpdateInput, luu_anhUncheckedUpdateInput>
  }

  /**
   * luu_anh delete
   */
  export type luu_anhDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    /**
     * Filter which luu_anh to delete.
     */
    where: luu_anhWhereUniqueInput
  }

  /**
   * luu_anh deleteMany
   */
  export type luu_anhDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which luu_anhs to delete
     */
    where?: luu_anhWhereInput
    /**
     * Limit how many luu_anhs to delete.
     */
    limit?: number
  }

  /**
   * luu_anh without action
   */
  export type luu_anhDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
  }


  /**
   * Model nguoi_dung
   */

  export type AggregateNguoi_dung = {
    _count: Nguoi_dungCountAggregateOutputType | null
    _avg: Nguoi_dungAvgAggregateOutputType | null
    _sum: Nguoi_dungSumAggregateOutputType | null
    _min: Nguoi_dungMinAggregateOutputType | null
    _max: Nguoi_dungMaxAggregateOutputType | null
  }

  export type Nguoi_dungAvgAggregateOutputType = {
    nguoi_dung_id: number | null
    tuoi: number | null
  }

  export type Nguoi_dungSumAggregateOutputType = {
    nguoi_dung_id: number | null
    tuoi: number | null
  }

  export type Nguoi_dungMinAggregateOutputType = {
    nguoi_dung_id: number | null
    email: string | null
    mat_khau: string | null
    ho_ten: string | null
    tuoi: number | null
    anh_dai_dien: string | null
  }

  export type Nguoi_dungMaxAggregateOutputType = {
    nguoi_dung_id: number | null
    email: string | null
    mat_khau: string | null
    ho_ten: string | null
    tuoi: number | null
    anh_dai_dien: string | null
  }

  export type Nguoi_dungCountAggregateOutputType = {
    nguoi_dung_id: number
    email: number
    mat_khau: number
    ho_ten: number
    tuoi: number
    anh_dai_dien: number
    _all: number
  }


  export type Nguoi_dungAvgAggregateInputType = {
    nguoi_dung_id?: true
    tuoi?: true
  }

  export type Nguoi_dungSumAggregateInputType = {
    nguoi_dung_id?: true
    tuoi?: true
  }

  export type Nguoi_dungMinAggregateInputType = {
    nguoi_dung_id?: true
    email?: true
    mat_khau?: true
    ho_ten?: true
    tuoi?: true
    anh_dai_dien?: true
  }

  export type Nguoi_dungMaxAggregateInputType = {
    nguoi_dung_id?: true
    email?: true
    mat_khau?: true
    ho_ten?: true
    tuoi?: true
    anh_dai_dien?: true
  }

  export type Nguoi_dungCountAggregateInputType = {
    nguoi_dung_id?: true
    email?: true
    mat_khau?: true
    ho_ten?: true
    tuoi?: true
    anh_dai_dien?: true
    _all?: true
  }

  export type Nguoi_dungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nguoi_dung to aggregate.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nguoi_dungs
    **/
    _count?: true | Nguoi_dungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nguoi_dungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nguoi_dungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nguoi_dungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nguoi_dungMaxAggregateInputType
  }

  export type GetNguoi_dungAggregateType<T extends Nguoi_dungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoi_dung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoi_dung[P]>
      : GetScalarType<T[P], AggregateNguoi_dung[P]>
  }




  export type nguoi_dungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nguoi_dungWhereInput
    orderBy?: nguoi_dungOrderByWithAggregationInput | nguoi_dungOrderByWithAggregationInput[]
    by: Nguoi_dungScalarFieldEnum[] | Nguoi_dungScalarFieldEnum
    having?: nguoi_dungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nguoi_dungCountAggregateInputType | true
    _avg?: Nguoi_dungAvgAggregateInputType
    _sum?: Nguoi_dungSumAggregateInputType
    _min?: Nguoi_dungMinAggregateInputType
    _max?: Nguoi_dungMaxAggregateInputType
  }

  export type Nguoi_dungGroupByOutputType = {
    nguoi_dung_id: number
    email: string | null
    mat_khau: string | null
    ho_ten: string | null
    tuoi: number | null
    anh_dai_dien: string | null
    _count: Nguoi_dungCountAggregateOutputType | null
    _avg: Nguoi_dungAvgAggregateOutputType | null
    _sum: Nguoi_dungSumAggregateOutputType | null
    _min: Nguoi_dungMinAggregateOutputType | null
    _max: Nguoi_dungMaxAggregateOutputType | null
  }

  type GetNguoi_dungGroupByPayload<T extends nguoi_dungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nguoi_dungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nguoi_dungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nguoi_dungGroupByOutputType[P]>
            : GetScalarType<T[P], Nguoi_dungGroupByOutputType[P]>
        }
      >
    >


  export type nguoi_dungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nguoi_dung_id?: boolean
    email?: boolean
    mat_khau?: boolean
    ho_ten?: boolean
    tuoi?: boolean
    anh_dai_dien?: boolean
    binh_luan?: boolean | nguoi_dung$binh_luanArgs<ExtArgs>
    hinh_anh?: boolean | nguoi_dung$hinh_anhArgs<ExtArgs>
    luu_anh?: boolean | nguoi_dung$luu_anhArgs<ExtArgs>
    _count?: boolean | Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoi_dung"]>



  export type nguoi_dungSelectScalar = {
    nguoi_dung_id?: boolean
    email?: boolean
    mat_khau?: boolean
    ho_ten?: boolean
    tuoi?: boolean
    anh_dai_dien?: boolean
  }

  export type nguoi_dungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nguoi_dung_id" | "email" | "mat_khau" | "ho_ten" | "tuoi" | "anh_dai_dien", ExtArgs["result"]["nguoi_dung"]>
  export type nguoi_dungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    binh_luan?: boolean | nguoi_dung$binh_luanArgs<ExtArgs>
    hinh_anh?: boolean | nguoi_dung$hinh_anhArgs<ExtArgs>
    luu_anh?: boolean | nguoi_dung$luu_anhArgs<ExtArgs>
    _count?: boolean | Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $nguoi_dungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nguoi_dung"
    objects: {
      binh_luan: Prisma.$binh_luanPayload<ExtArgs>[]
      hinh_anh: Prisma.$hinh_anhPayload<ExtArgs>[]
      luu_anh: Prisma.$luu_anhPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nguoi_dung_id: number
      email: string | null
      mat_khau: string | null
      ho_ten: string | null
      tuoi: number | null
      anh_dai_dien: string | null
    }, ExtArgs["result"]["nguoi_dung"]>
    composites: {}
  }

  type nguoi_dungGetPayload<S extends boolean | null | undefined | nguoi_dungDefaultArgs> = $Result.GetResult<Prisma.$nguoi_dungPayload, S>

  type nguoi_dungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nguoi_dungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nguoi_dungCountAggregateInputType | true
    }

  export interface nguoi_dungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nguoi_dung'], meta: { name: 'nguoi_dung' } }
    /**
     * Find zero or one Nguoi_dung that matches the filter.
     * @param {nguoi_dungFindUniqueArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nguoi_dungFindUniqueArgs>(args: SelectSubset<T, nguoi_dungFindUniqueArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nguoi_dung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nguoi_dungFindUniqueOrThrowArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nguoi_dungFindUniqueOrThrowArgs>(args: SelectSubset<T, nguoi_dungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nguoi_dung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindFirstArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nguoi_dungFindFirstArgs>(args?: SelectSubset<T, nguoi_dungFindFirstArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nguoi_dung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindFirstOrThrowArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nguoi_dungFindFirstOrThrowArgs>(args?: SelectSubset<T, nguoi_dungFindFirstOrThrowArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nguoi_dungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nguoi_dungs
     * const nguoi_dungs = await prisma.nguoi_dung.findMany()
     * 
     * // Get first 10 Nguoi_dungs
     * const nguoi_dungs = await prisma.nguoi_dung.findMany({ take: 10 })
     * 
     * // Only select the `nguoi_dung_id`
     * const nguoi_dungWithNguoi_dung_idOnly = await prisma.nguoi_dung.findMany({ select: { nguoi_dung_id: true } })
     * 
     */
    findMany<T extends nguoi_dungFindManyArgs>(args?: SelectSubset<T, nguoi_dungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nguoi_dung.
     * @param {nguoi_dungCreateArgs} args - Arguments to create a Nguoi_dung.
     * @example
     * // Create one Nguoi_dung
     * const Nguoi_dung = await prisma.nguoi_dung.create({
     *   data: {
     *     // ... data to create a Nguoi_dung
     *   }
     * })
     * 
     */
    create<T extends nguoi_dungCreateArgs>(args: SelectSubset<T, nguoi_dungCreateArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nguoi_dungs.
     * @param {nguoi_dungCreateManyArgs} args - Arguments to create many Nguoi_dungs.
     * @example
     * // Create many Nguoi_dungs
     * const nguoi_dung = await prisma.nguoi_dung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nguoi_dungCreateManyArgs>(args?: SelectSubset<T, nguoi_dungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nguoi_dung.
     * @param {nguoi_dungDeleteArgs} args - Arguments to delete one Nguoi_dung.
     * @example
     * // Delete one Nguoi_dung
     * const Nguoi_dung = await prisma.nguoi_dung.delete({
     *   where: {
     *     // ... filter to delete one Nguoi_dung
     *   }
     * })
     * 
     */
    delete<T extends nguoi_dungDeleteArgs>(args: SelectSubset<T, nguoi_dungDeleteArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nguoi_dung.
     * @param {nguoi_dungUpdateArgs} args - Arguments to update one Nguoi_dung.
     * @example
     * // Update one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nguoi_dungUpdateArgs>(args: SelectSubset<T, nguoi_dungUpdateArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nguoi_dungs.
     * @param {nguoi_dungDeleteManyArgs} args - Arguments to filter Nguoi_dungs to delete.
     * @example
     * // Delete a few Nguoi_dungs
     * const { count } = await prisma.nguoi_dung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nguoi_dungDeleteManyArgs>(args?: SelectSubset<T, nguoi_dungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nguoi_dungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nguoi_dungs
     * const nguoi_dung = await prisma.nguoi_dung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nguoi_dungUpdateManyArgs>(args: SelectSubset<T, nguoi_dungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nguoi_dung.
     * @param {nguoi_dungUpsertArgs} args - Arguments to update or create a Nguoi_dung.
     * @example
     * // Update or create a Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.upsert({
     *   create: {
     *     // ... data to create a Nguoi_dung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nguoi_dung we want to update
     *   }
     * })
     */
    upsert<T extends nguoi_dungUpsertArgs>(args: SelectSubset<T, nguoi_dungUpsertArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nguoi_dungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungCountArgs} args - Arguments to filter Nguoi_dungs to count.
     * @example
     * // Count the number of Nguoi_dungs
     * const count = await prisma.nguoi_dung.count({
     *   where: {
     *     // ... the filter for the Nguoi_dungs we want to count
     *   }
     * })
    **/
    count<T extends nguoi_dungCountArgs>(
      args?: Subset<T, nguoi_dungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nguoi_dungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nguoi_dung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nguoi_dungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nguoi_dungAggregateArgs>(args: Subset<T, Nguoi_dungAggregateArgs>): Prisma.PrismaPromise<GetNguoi_dungAggregateType<T>>

    /**
     * Group by Nguoi_dung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nguoi_dungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nguoi_dungGroupByArgs['orderBy'] }
        : { orderBy?: nguoi_dungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nguoi_dungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoi_dungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nguoi_dung model
   */
  readonly fields: nguoi_dungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nguoi_dung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nguoi_dungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    binh_luan<T extends nguoi_dung$binh_luanArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dung$binh_luanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$binh_luanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hinh_anh<T extends nguoi_dung$hinh_anhArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dung$hinh_anhArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hinh_anhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    luu_anh<T extends nguoi_dung$luu_anhArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dung$luu_anhArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$luu_anhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nguoi_dung model
   */
  interface nguoi_dungFieldRefs {
    readonly nguoi_dung_id: FieldRef<"nguoi_dung", 'Int'>
    readonly email: FieldRef<"nguoi_dung", 'String'>
    readonly mat_khau: FieldRef<"nguoi_dung", 'String'>
    readonly ho_ten: FieldRef<"nguoi_dung", 'String'>
    readonly tuoi: FieldRef<"nguoi_dung", 'Int'>
    readonly anh_dai_dien: FieldRef<"nguoi_dung", 'String'>
  }
    

  // Custom InputTypes
  /**
   * nguoi_dung findUnique
   */
  export type nguoi_dungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung findUniqueOrThrow
   */
  export type nguoi_dungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung findFirst
   */
  export type nguoi_dungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nguoi_dungs.
     */
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung findFirstOrThrow
   */
  export type nguoi_dungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nguoi_dungs.
     */
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung findMany
   */
  export type nguoi_dungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dungs to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nguoi_dungs.
     */
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung create
   */
  export type nguoi_dungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The data needed to create a nguoi_dung.
     */
    data?: XOR<nguoi_dungCreateInput, nguoi_dungUncheckedCreateInput>
  }

  /**
   * nguoi_dung createMany
   */
  export type nguoi_dungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nguoi_dungs.
     */
    data: nguoi_dungCreateManyInput | nguoi_dungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nguoi_dung update
   */
  export type nguoi_dungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The data needed to update a nguoi_dung.
     */
    data: XOR<nguoi_dungUpdateInput, nguoi_dungUncheckedUpdateInput>
    /**
     * Choose, which nguoi_dung to update.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung updateMany
   */
  export type nguoi_dungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nguoi_dungs.
     */
    data: XOR<nguoi_dungUpdateManyMutationInput, nguoi_dungUncheckedUpdateManyInput>
    /**
     * Filter which nguoi_dungs to update
     */
    where?: nguoi_dungWhereInput
    /**
     * Limit how many nguoi_dungs to update.
     */
    limit?: number
  }

  /**
   * nguoi_dung upsert
   */
  export type nguoi_dungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The filter to search for the nguoi_dung to update in case it exists.
     */
    where: nguoi_dungWhereUniqueInput
    /**
     * In case the nguoi_dung found by the `where` argument doesn't exist, create a new nguoi_dung with this data.
     */
    create: XOR<nguoi_dungCreateInput, nguoi_dungUncheckedCreateInput>
    /**
     * In case the nguoi_dung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nguoi_dungUpdateInput, nguoi_dungUncheckedUpdateInput>
  }

  /**
   * nguoi_dung delete
   */
  export type nguoi_dungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter which nguoi_dung to delete.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung deleteMany
   */
  export type nguoi_dungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nguoi_dungs to delete
     */
    where?: nguoi_dungWhereInput
    /**
     * Limit how many nguoi_dungs to delete.
     */
    limit?: number
  }

  /**
   * nguoi_dung.binh_luan
   */
  export type nguoi_dung$binh_luanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the binh_luan
     */
    select?: binh_luanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the binh_luan
     */
    omit?: binh_luanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: binh_luanInclude<ExtArgs> | null
    where?: binh_luanWhereInput
    orderBy?: binh_luanOrderByWithRelationInput | binh_luanOrderByWithRelationInput[]
    cursor?: binh_luanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Binh_luanScalarFieldEnum | Binh_luanScalarFieldEnum[]
  }

  /**
   * nguoi_dung.hinh_anh
   */
  export type nguoi_dung$hinh_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hinh_anh
     */
    select?: hinh_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hinh_anh
     */
    omit?: hinh_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hinh_anhInclude<ExtArgs> | null
    where?: hinh_anhWhereInput
    orderBy?: hinh_anhOrderByWithRelationInput | hinh_anhOrderByWithRelationInput[]
    cursor?: hinh_anhWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hinh_anhScalarFieldEnum | Hinh_anhScalarFieldEnum[]
  }

  /**
   * nguoi_dung.luu_anh
   */
  export type nguoi_dung$luu_anhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the luu_anh
     */
    select?: luu_anhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the luu_anh
     */
    omit?: luu_anhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: luu_anhInclude<ExtArgs> | null
    where?: luu_anhWhereInput
    orderBy?: luu_anhOrderByWithRelationInput | luu_anhOrderByWithRelationInput[]
    cursor?: luu_anhWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Luu_anhScalarFieldEnum | Luu_anhScalarFieldEnum[]
  }

  /**
   * nguoi_dung without action
   */
  export type nguoi_dungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Binh_luanScalarFieldEnum: {
    binh_luan_id: 'binh_luan_id',
    nguoi_dung_id: 'nguoi_dung_id',
    hinh_id: 'hinh_id',
    ngay_binh_luan: 'ngay_binh_luan',
    noi_dung: 'noi_dung'
  };

  export type Binh_luanScalarFieldEnum = (typeof Binh_luanScalarFieldEnum)[keyof typeof Binh_luanScalarFieldEnum]


  export const Hinh_anhScalarFieldEnum: {
    hinh_id: 'hinh_id',
    ten_hinh: 'ten_hinh',
    duong_dan: 'duong_dan',
    mo_ta: 'mo_ta',
    nguoi_dung_id: 'nguoi_dung_id'
  };

  export type Hinh_anhScalarFieldEnum = (typeof Hinh_anhScalarFieldEnum)[keyof typeof Hinh_anhScalarFieldEnum]


  export const Luu_anhScalarFieldEnum: {
    nguoi_dung_id: 'nguoi_dung_id',
    hinh_id: 'hinh_id',
    ngay_luu: 'ngay_luu'
  };

  export type Luu_anhScalarFieldEnum = (typeof Luu_anhScalarFieldEnum)[keyof typeof Luu_anhScalarFieldEnum]


  export const Nguoi_dungScalarFieldEnum: {
    nguoi_dung_id: 'nguoi_dung_id',
    email: 'email',
    mat_khau: 'mat_khau',
    ho_ten: 'ho_ten',
    tuoi: 'tuoi',
    anh_dai_dien: 'anh_dai_dien'
  };

  export type Nguoi_dungScalarFieldEnum = (typeof Nguoi_dungScalarFieldEnum)[keyof typeof Nguoi_dungScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const binh_luanOrderByRelevanceFieldEnum: {
    noi_dung: 'noi_dung'
  };

  export type binh_luanOrderByRelevanceFieldEnum = (typeof binh_luanOrderByRelevanceFieldEnum)[keyof typeof binh_luanOrderByRelevanceFieldEnum]


  export const hinh_anhOrderByRelevanceFieldEnum: {
    ten_hinh: 'ten_hinh',
    duong_dan: 'duong_dan',
    mo_ta: 'mo_ta'
  };

  export type hinh_anhOrderByRelevanceFieldEnum = (typeof hinh_anhOrderByRelevanceFieldEnum)[keyof typeof hinh_anhOrderByRelevanceFieldEnum]


  export const nguoi_dungOrderByRelevanceFieldEnum: {
    email: 'email',
    mat_khau: 'mat_khau',
    ho_ten: 'ho_ten',
    anh_dai_dien: 'anh_dai_dien'
  };

  export type nguoi_dungOrderByRelevanceFieldEnum = (typeof nguoi_dungOrderByRelevanceFieldEnum)[keyof typeof nguoi_dungOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type binh_luanWhereInput = {
    AND?: binh_luanWhereInput | binh_luanWhereInput[]
    OR?: binh_luanWhereInput[]
    NOT?: binh_luanWhereInput | binh_luanWhereInput[]
    binh_luan_id?: IntFilter<"binh_luan"> | number
    nguoi_dung_id?: IntNullableFilter<"binh_luan"> | number | null
    hinh_id?: IntNullableFilter<"binh_luan"> | number | null
    ngay_binh_luan?: DateTimeNullableFilter<"binh_luan"> | Date | string | null
    noi_dung?: StringNullableFilter<"binh_luan"> | string | null
    nguoi_dung?: XOR<Nguoi_dungNullableScalarRelationFilter, nguoi_dungWhereInput> | null
  }

  export type binh_luanOrderByWithRelationInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrderInput | SortOrder
    hinh_id?: SortOrderInput | SortOrder
    ngay_binh_luan?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    nguoi_dung?: nguoi_dungOrderByWithRelationInput
    _relevance?: binh_luanOrderByRelevanceInput
  }

  export type binh_luanWhereUniqueInput = Prisma.AtLeast<{
    binh_luan_id?: number
    AND?: binh_luanWhereInput | binh_luanWhereInput[]
    OR?: binh_luanWhereInput[]
    NOT?: binh_luanWhereInput | binh_luanWhereInput[]
    nguoi_dung_id?: IntNullableFilter<"binh_luan"> | number | null
    hinh_id?: IntNullableFilter<"binh_luan"> | number | null
    ngay_binh_luan?: DateTimeNullableFilter<"binh_luan"> | Date | string | null
    noi_dung?: StringNullableFilter<"binh_luan"> | string | null
    nguoi_dung?: XOR<Nguoi_dungNullableScalarRelationFilter, nguoi_dungWhereInput> | null
  }, "binh_luan_id">

  export type binh_luanOrderByWithAggregationInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrderInput | SortOrder
    hinh_id?: SortOrderInput | SortOrder
    ngay_binh_luan?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    _count?: binh_luanCountOrderByAggregateInput
    _avg?: binh_luanAvgOrderByAggregateInput
    _max?: binh_luanMaxOrderByAggregateInput
    _min?: binh_luanMinOrderByAggregateInput
    _sum?: binh_luanSumOrderByAggregateInput
  }

  export type binh_luanScalarWhereWithAggregatesInput = {
    AND?: binh_luanScalarWhereWithAggregatesInput | binh_luanScalarWhereWithAggregatesInput[]
    OR?: binh_luanScalarWhereWithAggregatesInput[]
    NOT?: binh_luanScalarWhereWithAggregatesInput | binh_luanScalarWhereWithAggregatesInput[]
    binh_luan_id?: IntWithAggregatesFilter<"binh_luan"> | number
    nguoi_dung_id?: IntNullableWithAggregatesFilter<"binh_luan"> | number | null
    hinh_id?: IntNullableWithAggregatesFilter<"binh_luan"> | number | null
    ngay_binh_luan?: DateTimeNullableWithAggregatesFilter<"binh_luan"> | Date | string | null
    noi_dung?: StringNullableWithAggregatesFilter<"binh_luan"> | string | null
  }

  export type hinh_anhWhereInput = {
    AND?: hinh_anhWhereInput | hinh_anhWhereInput[]
    OR?: hinh_anhWhereInput[]
    NOT?: hinh_anhWhereInput | hinh_anhWhereInput[]
    hinh_id?: IntFilter<"hinh_anh"> | number
    ten_hinh?: StringNullableFilter<"hinh_anh"> | string | null
    duong_dan?: StringNullableFilter<"hinh_anh"> | string | null
    mo_ta?: StringNullableFilter<"hinh_anh"> | string | null
    nguoi_dung_id?: IntNullableFilter<"hinh_anh"> | number | null
    nguoi_dung?: XOR<Nguoi_dungNullableScalarRelationFilter, nguoi_dungWhereInput> | null
    luu_anh?: Luu_anhListRelationFilter
  }

  export type hinh_anhOrderByWithRelationInput = {
    hinh_id?: SortOrder
    ten_hinh?: SortOrderInput | SortOrder
    duong_dan?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    nguoi_dung_id?: SortOrderInput | SortOrder
    nguoi_dung?: nguoi_dungOrderByWithRelationInput
    luu_anh?: luu_anhOrderByRelationAggregateInput
    _relevance?: hinh_anhOrderByRelevanceInput
  }

  export type hinh_anhWhereUniqueInput = Prisma.AtLeast<{
    hinh_id?: number
    AND?: hinh_anhWhereInput | hinh_anhWhereInput[]
    OR?: hinh_anhWhereInput[]
    NOT?: hinh_anhWhereInput | hinh_anhWhereInput[]
    ten_hinh?: StringNullableFilter<"hinh_anh"> | string | null
    duong_dan?: StringNullableFilter<"hinh_anh"> | string | null
    mo_ta?: StringNullableFilter<"hinh_anh"> | string | null
    nguoi_dung_id?: IntNullableFilter<"hinh_anh"> | number | null
    nguoi_dung?: XOR<Nguoi_dungNullableScalarRelationFilter, nguoi_dungWhereInput> | null
    luu_anh?: Luu_anhListRelationFilter
  }, "hinh_id">

  export type hinh_anhOrderByWithAggregationInput = {
    hinh_id?: SortOrder
    ten_hinh?: SortOrderInput | SortOrder
    duong_dan?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    nguoi_dung_id?: SortOrderInput | SortOrder
    _count?: hinh_anhCountOrderByAggregateInput
    _avg?: hinh_anhAvgOrderByAggregateInput
    _max?: hinh_anhMaxOrderByAggregateInput
    _min?: hinh_anhMinOrderByAggregateInput
    _sum?: hinh_anhSumOrderByAggregateInput
  }

  export type hinh_anhScalarWhereWithAggregatesInput = {
    AND?: hinh_anhScalarWhereWithAggregatesInput | hinh_anhScalarWhereWithAggregatesInput[]
    OR?: hinh_anhScalarWhereWithAggregatesInput[]
    NOT?: hinh_anhScalarWhereWithAggregatesInput | hinh_anhScalarWhereWithAggregatesInput[]
    hinh_id?: IntWithAggregatesFilter<"hinh_anh"> | number
    ten_hinh?: StringNullableWithAggregatesFilter<"hinh_anh"> | string | null
    duong_dan?: StringNullableWithAggregatesFilter<"hinh_anh"> | string | null
    mo_ta?: StringNullableWithAggregatesFilter<"hinh_anh"> | string | null
    nguoi_dung_id?: IntNullableWithAggregatesFilter<"hinh_anh"> | number | null
  }

  export type luu_anhWhereInput = {
    AND?: luu_anhWhereInput | luu_anhWhereInput[]
    OR?: luu_anhWhereInput[]
    NOT?: luu_anhWhereInput | luu_anhWhereInput[]
    nguoi_dung_id?: IntFilter<"luu_anh"> | number
    hinh_id?: IntFilter<"luu_anh"> | number
    ngay_luu?: DateTimeNullableFilter<"luu_anh"> | Date | string | null
    nguoi_dung?: XOR<Nguoi_dungScalarRelationFilter, nguoi_dungWhereInput>
    hinh_anh?: XOR<Hinh_anhScalarRelationFilter, hinh_anhWhereInput>
  }

  export type luu_anhOrderByWithRelationInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_luu?: SortOrderInput | SortOrder
    nguoi_dung?: nguoi_dungOrderByWithRelationInput
    hinh_anh?: hinh_anhOrderByWithRelationInput
  }

  export type luu_anhWhereUniqueInput = Prisma.AtLeast<{
    nguoi_dung_id_hinh_id?: luu_anhNguoi_dung_idHinh_idCompoundUniqueInput
    AND?: luu_anhWhereInput | luu_anhWhereInput[]
    OR?: luu_anhWhereInput[]
    NOT?: luu_anhWhereInput | luu_anhWhereInput[]
    nguoi_dung_id?: IntFilter<"luu_anh"> | number
    hinh_id?: IntFilter<"luu_anh"> | number
    ngay_luu?: DateTimeNullableFilter<"luu_anh"> | Date | string | null
    nguoi_dung?: XOR<Nguoi_dungScalarRelationFilter, nguoi_dungWhereInput>
    hinh_anh?: XOR<Hinh_anhScalarRelationFilter, hinh_anhWhereInput>
  }, "nguoi_dung_id_hinh_id">

  export type luu_anhOrderByWithAggregationInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_luu?: SortOrderInput | SortOrder
    _count?: luu_anhCountOrderByAggregateInput
    _avg?: luu_anhAvgOrderByAggregateInput
    _max?: luu_anhMaxOrderByAggregateInput
    _min?: luu_anhMinOrderByAggregateInput
    _sum?: luu_anhSumOrderByAggregateInput
  }

  export type luu_anhScalarWhereWithAggregatesInput = {
    AND?: luu_anhScalarWhereWithAggregatesInput | luu_anhScalarWhereWithAggregatesInput[]
    OR?: luu_anhScalarWhereWithAggregatesInput[]
    NOT?: luu_anhScalarWhereWithAggregatesInput | luu_anhScalarWhereWithAggregatesInput[]
    nguoi_dung_id?: IntWithAggregatesFilter<"luu_anh"> | number
    hinh_id?: IntWithAggregatesFilter<"luu_anh"> | number
    ngay_luu?: DateTimeNullableWithAggregatesFilter<"luu_anh"> | Date | string | null
  }

  export type nguoi_dungWhereInput = {
    AND?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    OR?: nguoi_dungWhereInput[]
    NOT?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    nguoi_dung_id?: IntFilter<"nguoi_dung"> | number
    email?: StringNullableFilter<"nguoi_dung"> | string | null
    mat_khau?: StringNullableFilter<"nguoi_dung"> | string | null
    ho_ten?: StringNullableFilter<"nguoi_dung"> | string | null
    tuoi?: IntNullableFilter<"nguoi_dung"> | number | null
    anh_dai_dien?: StringNullableFilter<"nguoi_dung"> | string | null
    binh_luan?: Binh_luanListRelationFilter
    hinh_anh?: Hinh_anhListRelationFilter
    luu_anh?: Luu_anhListRelationFilter
  }

  export type nguoi_dungOrderByWithRelationInput = {
    nguoi_dung_id?: SortOrder
    email?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    ho_ten?: SortOrderInput | SortOrder
    tuoi?: SortOrderInput | SortOrder
    anh_dai_dien?: SortOrderInput | SortOrder
    binh_luan?: binh_luanOrderByRelationAggregateInput
    hinh_anh?: hinh_anhOrderByRelationAggregateInput
    luu_anh?: luu_anhOrderByRelationAggregateInput
    _relevance?: nguoi_dungOrderByRelevanceInput
  }

  export type nguoi_dungWhereUniqueInput = Prisma.AtLeast<{
    nguoi_dung_id?: number
    AND?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    OR?: nguoi_dungWhereInput[]
    NOT?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    email?: StringNullableFilter<"nguoi_dung"> | string | null
    mat_khau?: StringNullableFilter<"nguoi_dung"> | string | null
    ho_ten?: StringNullableFilter<"nguoi_dung"> | string | null
    tuoi?: IntNullableFilter<"nguoi_dung"> | number | null
    anh_dai_dien?: StringNullableFilter<"nguoi_dung"> | string | null
    binh_luan?: Binh_luanListRelationFilter
    hinh_anh?: Hinh_anhListRelationFilter
    luu_anh?: Luu_anhListRelationFilter
  }, "nguoi_dung_id">

  export type nguoi_dungOrderByWithAggregationInput = {
    nguoi_dung_id?: SortOrder
    email?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    ho_ten?: SortOrderInput | SortOrder
    tuoi?: SortOrderInput | SortOrder
    anh_dai_dien?: SortOrderInput | SortOrder
    _count?: nguoi_dungCountOrderByAggregateInput
    _avg?: nguoi_dungAvgOrderByAggregateInput
    _max?: nguoi_dungMaxOrderByAggregateInput
    _min?: nguoi_dungMinOrderByAggregateInput
    _sum?: nguoi_dungSumOrderByAggregateInput
  }

  export type nguoi_dungScalarWhereWithAggregatesInput = {
    AND?: nguoi_dungScalarWhereWithAggregatesInput | nguoi_dungScalarWhereWithAggregatesInput[]
    OR?: nguoi_dungScalarWhereWithAggregatesInput[]
    NOT?: nguoi_dungScalarWhereWithAggregatesInput | nguoi_dungScalarWhereWithAggregatesInput[]
    nguoi_dung_id?: IntWithAggregatesFilter<"nguoi_dung"> | number
    email?: StringNullableWithAggregatesFilter<"nguoi_dung"> | string | null
    mat_khau?: StringNullableWithAggregatesFilter<"nguoi_dung"> | string | null
    ho_ten?: StringNullableWithAggregatesFilter<"nguoi_dung"> | string | null
    tuoi?: IntNullableWithAggregatesFilter<"nguoi_dung"> | number | null
    anh_dai_dien?: StringNullableWithAggregatesFilter<"nguoi_dung"> | string | null
  }

  export type binh_luanCreateInput = {
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    nguoi_dung?: nguoi_dungCreateNestedOneWithoutBinh_luanInput
  }

  export type binh_luanUncheckedCreateInput = {
    binh_luan_id?: number
    nguoi_dung_id?: number | null
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
  }

  export type binh_luanUpdateInput = {
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung?: nguoi_dungUpdateOneWithoutBinh_luanNestedInput
  }

  export type binh_luanUncheckedUpdateInput = {
    binh_luan_id?: IntFieldUpdateOperationsInput | number
    nguoi_dung_id?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type binh_luanCreateManyInput = {
    binh_luan_id?: number
    nguoi_dung_id?: number | null
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
  }

  export type binh_luanUpdateManyMutationInput = {
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type binh_luanUncheckedUpdateManyInput = {
    binh_luan_id?: IntFieldUpdateOperationsInput | number
    nguoi_dung_id?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hinh_anhCreateInput = {
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    nguoi_dung?: nguoi_dungCreateNestedOneWithoutHinh_anhInput
    luu_anh?: luu_anhCreateNestedManyWithoutHinh_anhInput
  }

  export type hinh_anhUncheckedCreateInput = {
    hinh_id?: number
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    nguoi_dung_id?: number | null
    luu_anh?: luu_anhUncheckedCreateNestedManyWithoutHinh_anhInput
  }

  export type hinh_anhUpdateInput = {
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung?: nguoi_dungUpdateOneWithoutHinh_anhNestedInput
    luu_anh?: luu_anhUpdateManyWithoutHinh_anhNestedInput
  }

  export type hinh_anhUncheckedUpdateInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung_id?: NullableIntFieldUpdateOperationsInput | number | null
    luu_anh?: luu_anhUncheckedUpdateManyWithoutHinh_anhNestedInput
  }

  export type hinh_anhCreateManyInput = {
    hinh_id?: number
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    nguoi_dung_id?: number | null
  }

  export type hinh_anhUpdateManyMutationInput = {
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hinh_anhUncheckedUpdateManyInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type luu_anhCreateInput = {
    ngay_luu?: Date | string | null
    nguoi_dung: nguoi_dungCreateNestedOneWithoutLuu_anhInput
    hinh_anh: hinh_anhCreateNestedOneWithoutLuu_anhInput
  }

  export type luu_anhUncheckedCreateInput = {
    nguoi_dung_id: number
    hinh_id: number
    ngay_luu?: Date | string | null
  }

  export type luu_anhUpdateInput = {
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nguoi_dung?: nguoi_dungUpdateOneRequiredWithoutLuu_anhNestedInput
    hinh_anh?: hinh_anhUpdateOneRequiredWithoutLuu_anhNestedInput
  }

  export type luu_anhUncheckedUpdateInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    hinh_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type luu_anhCreateManyInput = {
    nguoi_dung_id: number
    hinh_id: number
    ngay_luu?: Date | string | null
  }

  export type luu_anhUpdateManyMutationInput = {
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type luu_anhUncheckedUpdateManyInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    hinh_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nguoi_dungCreateInput = {
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanCreateNestedManyWithoutNguoi_dungInput
    hinh_anh?: hinh_anhCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUncheckedCreateInput = {
    nguoi_dung_id?: number
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanUncheckedCreateNestedManyWithoutNguoi_dungInput
    hinh_anh?: hinh_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUpdateManyWithoutNguoi_dungNestedInput
    hinh_anh?: hinh_anhUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungUncheckedUpdateInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUncheckedUpdateManyWithoutNguoi_dungNestedInput
    hinh_anh?: hinh_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungCreateManyInput = {
    nguoi_dung_id?: number
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
  }

  export type nguoi_dungUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nguoi_dungUncheckedUpdateManyInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Nguoi_dungNullableScalarRelationFilter = {
    is?: nguoi_dungWhereInput | null
    isNot?: nguoi_dungWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type binh_luanOrderByRelevanceInput = {
    fields: binh_luanOrderByRelevanceFieldEnum | binh_luanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type binh_luanCountOrderByAggregateInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
  }

  export type binh_luanAvgOrderByAggregateInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
  }

  export type binh_luanMaxOrderByAggregateInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
  }

  export type binh_luanMinOrderByAggregateInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
  }

  export type binh_luanSumOrderByAggregateInput = {
    binh_luan_id?: SortOrder
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Luu_anhListRelationFilter = {
    every?: luu_anhWhereInput
    some?: luu_anhWhereInput
    none?: luu_anhWhereInput
  }

  export type luu_anhOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hinh_anhOrderByRelevanceInput = {
    fields: hinh_anhOrderByRelevanceFieldEnum | hinh_anhOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hinh_anhCountOrderByAggregateInput = {
    hinh_id?: SortOrder
    ten_hinh?: SortOrder
    duong_dan?: SortOrder
    mo_ta?: SortOrder
    nguoi_dung_id?: SortOrder
  }

  export type hinh_anhAvgOrderByAggregateInput = {
    hinh_id?: SortOrder
    nguoi_dung_id?: SortOrder
  }

  export type hinh_anhMaxOrderByAggregateInput = {
    hinh_id?: SortOrder
    ten_hinh?: SortOrder
    duong_dan?: SortOrder
    mo_ta?: SortOrder
    nguoi_dung_id?: SortOrder
  }

  export type hinh_anhMinOrderByAggregateInput = {
    hinh_id?: SortOrder
    ten_hinh?: SortOrder
    duong_dan?: SortOrder
    mo_ta?: SortOrder
    nguoi_dung_id?: SortOrder
  }

  export type hinh_anhSumOrderByAggregateInput = {
    hinh_id?: SortOrder
    nguoi_dung_id?: SortOrder
  }

  export type Nguoi_dungScalarRelationFilter = {
    is?: nguoi_dungWhereInput
    isNot?: nguoi_dungWhereInput
  }

  export type Hinh_anhScalarRelationFilter = {
    is?: hinh_anhWhereInput
    isNot?: hinh_anhWhereInput
  }

  export type luu_anhNguoi_dung_idHinh_idCompoundUniqueInput = {
    nguoi_dung_id: number
    hinh_id: number
  }

  export type luu_anhCountOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_luu?: SortOrder
  }

  export type luu_anhAvgOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
  }

  export type luu_anhMaxOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_luu?: SortOrder
  }

  export type luu_anhMinOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
    ngay_luu?: SortOrder
  }

  export type luu_anhSumOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    hinh_id?: SortOrder
  }

  export type Binh_luanListRelationFilter = {
    every?: binh_luanWhereInput
    some?: binh_luanWhereInput
    none?: binh_luanWhereInput
  }

  export type Hinh_anhListRelationFilter = {
    every?: hinh_anhWhereInput
    some?: hinh_anhWhereInput
    none?: hinh_anhWhereInput
  }

  export type binh_luanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hinh_anhOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nguoi_dungOrderByRelevanceInput = {
    fields: nguoi_dungOrderByRelevanceFieldEnum | nguoi_dungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type nguoi_dungCountOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    email?: SortOrder
    mat_khau?: SortOrder
    ho_ten?: SortOrder
    tuoi?: SortOrder
    anh_dai_dien?: SortOrder
  }

  export type nguoi_dungAvgOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    tuoi?: SortOrder
  }

  export type nguoi_dungMaxOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    email?: SortOrder
    mat_khau?: SortOrder
    ho_ten?: SortOrder
    tuoi?: SortOrder
    anh_dai_dien?: SortOrder
  }

  export type nguoi_dungMinOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    email?: SortOrder
    mat_khau?: SortOrder
    ho_ten?: SortOrder
    tuoi?: SortOrder
    anh_dai_dien?: SortOrder
  }

  export type nguoi_dungSumOrderByAggregateInput = {
    nguoi_dung_id?: SortOrder
    tuoi?: SortOrder
  }

  export type nguoi_dungCreateNestedOneWithoutBinh_luanInput = {
    create?: XOR<nguoi_dungCreateWithoutBinh_luanInput, nguoi_dungUncheckedCreateWithoutBinh_luanInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutBinh_luanInput
    connect?: nguoi_dungWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type nguoi_dungUpdateOneWithoutBinh_luanNestedInput = {
    create?: XOR<nguoi_dungCreateWithoutBinh_luanInput, nguoi_dungUncheckedCreateWithoutBinh_luanInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutBinh_luanInput
    upsert?: nguoi_dungUpsertWithoutBinh_luanInput
    disconnect?: nguoi_dungWhereInput | boolean
    delete?: nguoi_dungWhereInput | boolean
    connect?: nguoi_dungWhereUniqueInput
    update?: XOR<XOR<nguoi_dungUpdateToOneWithWhereWithoutBinh_luanInput, nguoi_dungUpdateWithoutBinh_luanInput>, nguoi_dungUncheckedUpdateWithoutBinh_luanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type nguoi_dungCreateNestedOneWithoutHinh_anhInput = {
    create?: XOR<nguoi_dungCreateWithoutHinh_anhInput, nguoi_dungUncheckedCreateWithoutHinh_anhInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutHinh_anhInput
    connect?: nguoi_dungWhereUniqueInput
  }

  export type luu_anhCreateNestedManyWithoutHinh_anhInput = {
    create?: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput> | luu_anhCreateWithoutHinh_anhInput[] | luu_anhUncheckedCreateWithoutHinh_anhInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutHinh_anhInput | luu_anhCreateOrConnectWithoutHinh_anhInput[]
    createMany?: luu_anhCreateManyHinh_anhInputEnvelope
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
  }

  export type luu_anhUncheckedCreateNestedManyWithoutHinh_anhInput = {
    create?: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput> | luu_anhCreateWithoutHinh_anhInput[] | luu_anhUncheckedCreateWithoutHinh_anhInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutHinh_anhInput | luu_anhCreateOrConnectWithoutHinh_anhInput[]
    createMany?: luu_anhCreateManyHinh_anhInputEnvelope
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
  }

  export type nguoi_dungUpdateOneWithoutHinh_anhNestedInput = {
    create?: XOR<nguoi_dungCreateWithoutHinh_anhInput, nguoi_dungUncheckedCreateWithoutHinh_anhInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutHinh_anhInput
    upsert?: nguoi_dungUpsertWithoutHinh_anhInput
    disconnect?: nguoi_dungWhereInput | boolean
    delete?: nguoi_dungWhereInput | boolean
    connect?: nguoi_dungWhereUniqueInput
    update?: XOR<XOR<nguoi_dungUpdateToOneWithWhereWithoutHinh_anhInput, nguoi_dungUpdateWithoutHinh_anhInput>, nguoi_dungUncheckedUpdateWithoutHinh_anhInput>
  }

  export type luu_anhUpdateManyWithoutHinh_anhNestedInput = {
    create?: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput> | luu_anhCreateWithoutHinh_anhInput[] | luu_anhUncheckedCreateWithoutHinh_anhInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutHinh_anhInput | luu_anhCreateOrConnectWithoutHinh_anhInput[]
    upsert?: luu_anhUpsertWithWhereUniqueWithoutHinh_anhInput | luu_anhUpsertWithWhereUniqueWithoutHinh_anhInput[]
    createMany?: luu_anhCreateManyHinh_anhInputEnvelope
    set?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    disconnect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    delete?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    update?: luu_anhUpdateWithWhereUniqueWithoutHinh_anhInput | luu_anhUpdateWithWhereUniqueWithoutHinh_anhInput[]
    updateMany?: luu_anhUpdateManyWithWhereWithoutHinh_anhInput | luu_anhUpdateManyWithWhereWithoutHinh_anhInput[]
    deleteMany?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
  }

  export type luu_anhUncheckedUpdateManyWithoutHinh_anhNestedInput = {
    create?: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput> | luu_anhCreateWithoutHinh_anhInput[] | luu_anhUncheckedCreateWithoutHinh_anhInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutHinh_anhInput | luu_anhCreateOrConnectWithoutHinh_anhInput[]
    upsert?: luu_anhUpsertWithWhereUniqueWithoutHinh_anhInput | luu_anhUpsertWithWhereUniqueWithoutHinh_anhInput[]
    createMany?: luu_anhCreateManyHinh_anhInputEnvelope
    set?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    disconnect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    delete?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    update?: luu_anhUpdateWithWhereUniqueWithoutHinh_anhInput | luu_anhUpdateWithWhereUniqueWithoutHinh_anhInput[]
    updateMany?: luu_anhUpdateManyWithWhereWithoutHinh_anhInput | luu_anhUpdateManyWithWhereWithoutHinh_anhInput[]
    deleteMany?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
  }

  export type nguoi_dungCreateNestedOneWithoutLuu_anhInput = {
    create?: XOR<nguoi_dungCreateWithoutLuu_anhInput, nguoi_dungUncheckedCreateWithoutLuu_anhInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutLuu_anhInput
    connect?: nguoi_dungWhereUniqueInput
  }

  export type hinh_anhCreateNestedOneWithoutLuu_anhInput = {
    create?: XOR<hinh_anhCreateWithoutLuu_anhInput, hinh_anhUncheckedCreateWithoutLuu_anhInput>
    connectOrCreate?: hinh_anhCreateOrConnectWithoutLuu_anhInput
    connect?: hinh_anhWhereUniqueInput
  }

  export type nguoi_dungUpdateOneRequiredWithoutLuu_anhNestedInput = {
    create?: XOR<nguoi_dungCreateWithoutLuu_anhInput, nguoi_dungUncheckedCreateWithoutLuu_anhInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutLuu_anhInput
    upsert?: nguoi_dungUpsertWithoutLuu_anhInput
    connect?: nguoi_dungWhereUniqueInput
    update?: XOR<XOR<nguoi_dungUpdateToOneWithWhereWithoutLuu_anhInput, nguoi_dungUpdateWithoutLuu_anhInput>, nguoi_dungUncheckedUpdateWithoutLuu_anhInput>
  }

  export type hinh_anhUpdateOneRequiredWithoutLuu_anhNestedInput = {
    create?: XOR<hinh_anhCreateWithoutLuu_anhInput, hinh_anhUncheckedCreateWithoutLuu_anhInput>
    connectOrCreate?: hinh_anhCreateOrConnectWithoutLuu_anhInput
    upsert?: hinh_anhUpsertWithoutLuu_anhInput
    connect?: hinh_anhWhereUniqueInput
    update?: XOR<XOR<hinh_anhUpdateToOneWithWhereWithoutLuu_anhInput, hinh_anhUpdateWithoutLuu_anhInput>, hinh_anhUncheckedUpdateWithoutLuu_anhInput>
  }

  export type binh_luanCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput> | binh_luanCreateWithoutNguoi_dungInput[] | binh_luanUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: binh_luanCreateOrConnectWithoutNguoi_dungInput | binh_luanCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: binh_luanCreateManyNguoi_dungInputEnvelope
    connect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
  }

  export type hinh_anhCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput> | hinh_anhCreateWithoutNguoi_dungInput[] | hinh_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: hinh_anhCreateOrConnectWithoutNguoi_dungInput | hinh_anhCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: hinh_anhCreateManyNguoi_dungInputEnvelope
    connect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
  }

  export type luu_anhCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput> | luu_anhCreateWithoutNguoi_dungInput[] | luu_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutNguoi_dungInput | luu_anhCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: luu_anhCreateManyNguoi_dungInputEnvelope
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
  }

  export type binh_luanUncheckedCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput> | binh_luanCreateWithoutNguoi_dungInput[] | binh_luanUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: binh_luanCreateOrConnectWithoutNguoi_dungInput | binh_luanCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: binh_luanCreateManyNguoi_dungInputEnvelope
    connect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
  }

  export type hinh_anhUncheckedCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput> | hinh_anhCreateWithoutNguoi_dungInput[] | hinh_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: hinh_anhCreateOrConnectWithoutNguoi_dungInput | hinh_anhCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: hinh_anhCreateManyNguoi_dungInputEnvelope
    connect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
  }

  export type luu_anhUncheckedCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput> | luu_anhCreateWithoutNguoi_dungInput[] | luu_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutNguoi_dungInput | luu_anhCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: luu_anhCreateManyNguoi_dungInputEnvelope
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
  }

  export type binh_luanUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput> | binh_luanCreateWithoutNguoi_dungInput[] | binh_luanUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: binh_luanCreateOrConnectWithoutNguoi_dungInput | binh_luanCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: binh_luanUpsertWithWhereUniqueWithoutNguoi_dungInput | binh_luanUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: binh_luanCreateManyNguoi_dungInputEnvelope
    set?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    disconnect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    delete?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    connect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    update?: binh_luanUpdateWithWhereUniqueWithoutNguoi_dungInput | binh_luanUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: binh_luanUpdateManyWithWhereWithoutNguoi_dungInput | binh_luanUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: binh_luanScalarWhereInput | binh_luanScalarWhereInput[]
  }

  export type hinh_anhUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput> | hinh_anhCreateWithoutNguoi_dungInput[] | hinh_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: hinh_anhCreateOrConnectWithoutNguoi_dungInput | hinh_anhCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: hinh_anhUpsertWithWhereUniqueWithoutNguoi_dungInput | hinh_anhUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: hinh_anhCreateManyNguoi_dungInputEnvelope
    set?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    disconnect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    delete?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    connect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    update?: hinh_anhUpdateWithWhereUniqueWithoutNguoi_dungInput | hinh_anhUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: hinh_anhUpdateManyWithWhereWithoutNguoi_dungInput | hinh_anhUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: hinh_anhScalarWhereInput | hinh_anhScalarWhereInput[]
  }

  export type luu_anhUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput> | luu_anhCreateWithoutNguoi_dungInput[] | luu_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutNguoi_dungInput | luu_anhCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: luu_anhUpsertWithWhereUniqueWithoutNguoi_dungInput | luu_anhUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: luu_anhCreateManyNguoi_dungInputEnvelope
    set?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    disconnect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    delete?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    update?: luu_anhUpdateWithWhereUniqueWithoutNguoi_dungInput | luu_anhUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: luu_anhUpdateManyWithWhereWithoutNguoi_dungInput | luu_anhUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
  }

  export type binh_luanUncheckedUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput> | binh_luanCreateWithoutNguoi_dungInput[] | binh_luanUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: binh_luanCreateOrConnectWithoutNguoi_dungInput | binh_luanCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: binh_luanUpsertWithWhereUniqueWithoutNguoi_dungInput | binh_luanUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: binh_luanCreateManyNguoi_dungInputEnvelope
    set?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    disconnect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    delete?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    connect?: binh_luanWhereUniqueInput | binh_luanWhereUniqueInput[]
    update?: binh_luanUpdateWithWhereUniqueWithoutNguoi_dungInput | binh_luanUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: binh_luanUpdateManyWithWhereWithoutNguoi_dungInput | binh_luanUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: binh_luanScalarWhereInput | binh_luanScalarWhereInput[]
  }

  export type hinh_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput> | hinh_anhCreateWithoutNguoi_dungInput[] | hinh_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: hinh_anhCreateOrConnectWithoutNguoi_dungInput | hinh_anhCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: hinh_anhUpsertWithWhereUniqueWithoutNguoi_dungInput | hinh_anhUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: hinh_anhCreateManyNguoi_dungInputEnvelope
    set?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    disconnect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    delete?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    connect?: hinh_anhWhereUniqueInput | hinh_anhWhereUniqueInput[]
    update?: hinh_anhUpdateWithWhereUniqueWithoutNguoi_dungInput | hinh_anhUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: hinh_anhUpdateManyWithWhereWithoutNguoi_dungInput | hinh_anhUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: hinh_anhScalarWhereInput | hinh_anhScalarWhereInput[]
  }

  export type luu_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput> | luu_anhCreateWithoutNguoi_dungInput[] | luu_anhUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: luu_anhCreateOrConnectWithoutNguoi_dungInput | luu_anhCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: luu_anhUpsertWithWhereUniqueWithoutNguoi_dungInput | luu_anhUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: luu_anhCreateManyNguoi_dungInputEnvelope
    set?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    disconnect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    delete?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    connect?: luu_anhWhereUniqueInput | luu_anhWhereUniqueInput[]
    update?: luu_anhUpdateWithWhereUniqueWithoutNguoi_dungInput | luu_anhUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: luu_anhUpdateManyWithWhereWithoutNguoi_dungInput | luu_anhUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type nguoi_dungCreateWithoutBinh_luanInput = {
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    hinh_anh?: hinh_anhCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUncheckedCreateWithoutBinh_luanInput = {
    nguoi_dung_id?: number
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    hinh_anh?: hinh_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungCreateOrConnectWithoutBinh_luanInput = {
    where: nguoi_dungWhereUniqueInput
    create: XOR<nguoi_dungCreateWithoutBinh_luanInput, nguoi_dungUncheckedCreateWithoutBinh_luanInput>
  }

  export type nguoi_dungUpsertWithoutBinh_luanInput = {
    update: XOR<nguoi_dungUpdateWithoutBinh_luanInput, nguoi_dungUncheckedUpdateWithoutBinh_luanInput>
    create: XOR<nguoi_dungCreateWithoutBinh_luanInput, nguoi_dungUncheckedCreateWithoutBinh_luanInput>
    where?: nguoi_dungWhereInput
  }

  export type nguoi_dungUpdateToOneWithWhereWithoutBinh_luanInput = {
    where?: nguoi_dungWhereInput
    data: XOR<nguoi_dungUpdateWithoutBinh_luanInput, nguoi_dungUncheckedUpdateWithoutBinh_luanInput>
  }

  export type nguoi_dungUpdateWithoutBinh_luanInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: hinh_anhUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungUncheckedUpdateWithoutBinh_luanInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: hinh_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungCreateWithoutHinh_anhInput = {
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUncheckedCreateWithoutHinh_anhInput = {
    nguoi_dung_id?: number
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanUncheckedCreateNestedManyWithoutNguoi_dungInput
    luu_anh?: luu_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungCreateOrConnectWithoutHinh_anhInput = {
    where: nguoi_dungWhereUniqueInput
    create: XOR<nguoi_dungCreateWithoutHinh_anhInput, nguoi_dungUncheckedCreateWithoutHinh_anhInput>
  }

  export type luu_anhCreateWithoutHinh_anhInput = {
    ngay_luu?: Date | string | null
    nguoi_dung: nguoi_dungCreateNestedOneWithoutLuu_anhInput
  }

  export type luu_anhUncheckedCreateWithoutHinh_anhInput = {
    nguoi_dung_id: number
    ngay_luu?: Date | string | null
  }

  export type luu_anhCreateOrConnectWithoutHinh_anhInput = {
    where: luu_anhWhereUniqueInput
    create: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput>
  }

  export type luu_anhCreateManyHinh_anhInputEnvelope = {
    data: luu_anhCreateManyHinh_anhInput | luu_anhCreateManyHinh_anhInput[]
    skipDuplicates?: boolean
  }

  export type nguoi_dungUpsertWithoutHinh_anhInput = {
    update: XOR<nguoi_dungUpdateWithoutHinh_anhInput, nguoi_dungUncheckedUpdateWithoutHinh_anhInput>
    create: XOR<nguoi_dungCreateWithoutHinh_anhInput, nguoi_dungUncheckedCreateWithoutHinh_anhInput>
    where?: nguoi_dungWhereInput
  }

  export type nguoi_dungUpdateToOneWithWhereWithoutHinh_anhInput = {
    where?: nguoi_dungWhereInput
    data: XOR<nguoi_dungUpdateWithoutHinh_anhInput, nguoi_dungUncheckedUpdateWithoutHinh_anhInput>
  }

  export type nguoi_dungUpdateWithoutHinh_anhInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungUncheckedUpdateWithoutHinh_anhInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUncheckedUpdateManyWithoutNguoi_dungNestedInput
    luu_anh?: luu_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
  }

  export type luu_anhUpsertWithWhereUniqueWithoutHinh_anhInput = {
    where: luu_anhWhereUniqueInput
    update: XOR<luu_anhUpdateWithoutHinh_anhInput, luu_anhUncheckedUpdateWithoutHinh_anhInput>
    create: XOR<luu_anhCreateWithoutHinh_anhInput, luu_anhUncheckedCreateWithoutHinh_anhInput>
  }

  export type luu_anhUpdateWithWhereUniqueWithoutHinh_anhInput = {
    where: luu_anhWhereUniqueInput
    data: XOR<luu_anhUpdateWithoutHinh_anhInput, luu_anhUncheckedUpdateWithoutHinh_anhInput>
  }

  export type luu_anhUpdateManyWithWhereWithoutHinh_anhInput = {
    where: luu_anhScalarWhereInput
    data: XOR<luu_anhUpdateManyMutationInput, luu_anhUncheckedUpdateManyWithoutHinh_anhInput>
  }

  export type luu_anhScalarWhereInput = {
    AND?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
    OR?: luu_anhScalarWhereInput[]
    NOT?: luu_anhScalarWhereInput | luu_anhScalarWhereInput[]
    nguoi_dung_id?: IntFilter<"luu_anh"> | number
    hinh_id?: IntFilter<"luu_anh"> | number
    ngay_luu?: DateTimeNullableFilter<"luu_anh"> | Date | string | null
  }

  export type nguoi_dungCreateWithoutLuu_anhInput = {
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanCreateNestedManyWithoutNguoi_dungInput
    hinh_anh?: hinh_anhCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUncheckedCreateWithoutLuu_anhInput = {
    nguoi_dung_id?: number
    email?: string | null
    mat_khau?: string | null
    ho_ten?: string | null
    tuoi?: number | null
    anh_dai_dien?: string | null
    binh_luan?: binh_luanUncheckedCreateNestedManyWithoutNguoi_dungInput
    hinh_anh?: hinh_anhUncheckedCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungCreateOrConnectWithoutLuu_anhInput = {
    where: nguoi_dungWhereUniqueInput
    create: XOR<nguoi_dungCreateWithoutLuu_anhInput, nguoi_dungUncheckedCreateWithoutLuu_anhInput>
  }

  export type hinh_anhCreateWithoutLuu_anhInput = {
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    nguoi_dung?: nguoi_dungCreateNestedOneWithoutHinh_anhInput
  }

  export type hinh_anhUncheckedCreateWithoutLuu_anhInput = {
    hinh_id?: number
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    nguoi_dung_id?: number | null
  }

  export type hinh_anhCreateOrConnectWithoutLuu_anhInput = {
    where: hinh_anhWhereUniqueInput
    create: XOR<hinh_anhCreateWithoutLuu_anhInput, hinh_anhUncheckedCreateWithoutLuu_anhInput>
  }

  export type nguoi_dungUpsertWithoutLuu_anhInput = {
    update: XOR<nguoi_dungUpdateWithoutLuu_anhInput, nguoi_dungUncheckedUpdateWithoutLuu_anhInput>
    create: XOR<nguoi_dungCreateWithoutLuu_anhInput, nguoi_dungUncheckedCreateWithoutLuu_anhInput>
    where?: nguoi_dungWhereInput
  }

  export type nguoi_dungUpdateToOneWithWhereWithoutLuu_anhInput = {
    where?: nguoi_dungWhereInput
    data: XOR<nguoi_dungUpdateWithoutLuu_anhInput, nguoi_dungUncheckedUpdateWithoutLuu_anhInput>
  }

  export type nguoi_dungUpdateWithoutLuu_anhInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUpdateManyWithoutNguoi_dungNestedInput
    hinh_anh?: hinh_anhUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungUncheckedUpdateWithoutLuu_anhInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    tuoi?: NullableIntFieldUpdateOperationsInput | number | null
    anh_dai_dien?: NullableStringFieldUpdateOperationsInput | string | null
    binh_luan?: binh_luanUncheckedUpdateManyWithoutNguoi_dungNestedInput
    hinh_anh?: hinh_anhUncheckedUpdateManyWithoutNguoi_dungNestedInput
  }

  export type hinh_anhUpsertWithoutLuu_anhInput = {
    update: XOR<hinh_anhUpdateWithoutLuu_anhInput, hinh_anhUncheckedUpdateWithoutLuu_anhInput>
    create: XOR<hinh_anhCreateWithoutLuu_anhInput, hinh_anhUncheckedCreateWithoutLuu_anhInput>
    where?: hinh_anhWhereInput
  }

  export type hinh_anhUpdateToOneWithWhereWithoutLuu_anhInput = {
    where?: hinh_anhWhereInput
    data: XOR<hinh_anhUpdateWithoutLuu_anhInput, hinh_anhUncheckedUpdateWithoutLuu_anhInput>
  }

  export type hinh_anhUpdateWithoutLuu_anhInput = {
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung?: nguoi_dungUpdateOneWithoutHinh_anhNestedInput
  }

  export type hinh_anhUncheckedUpdateWithoutLuu_anhInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    nguoi_dung_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type binh_luanCreateWithoutNguoi_dungInput = {
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
  }

  export type binh_luanUncheckedCreateWithoutNguoi_dungInput = {
    binh_luan_id?: number
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
  }

  export type binh_luanCreateOrConnectWithoutNguoi_dungInput = {
    where: binh_luanWhereUniqueInput
    create: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput>
  }

  export type binh_luanCreateManyNguoi_dungInputEnvelope = {
    data: binh_luanCreateManyNguoi_dungInput | binh_luanCreateManyNguoi_dungInput[]
    skipDuplicates?: boolean
  }

  export type hinh_anhCreateWithoutNguoi_dungInput = {
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    luu_anh?: luu_anhCreateNestedManyWithoutHinh_anhInput
  }

  export type hinh_anhUncheckedCreateWithoutNguoi_dungInput = {
    hinh_id?: number
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
    luu_anh?: luu_anhUncheckedCreateNestedManyWithoutHinh_anhInput
  }

  export type hinh_anhCreateOrConnectWithoutNguoi_dungInput = {
    where: hinh_anhWhereUniqueInput
    create: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput>
  }

  export type hinh_anhCreateManyNguoi_dungInputEnvelope = {
    data: hinh_anhCreateManyNguoi_dungInput | hinh_anhCreateManyNguoi_dungInput[]
    skipDuplicates?: boolean
  }

  export type luu_anhCreateWithoutNguoi_dungInput = {
    ngay_luu?: Date | string | null
    hinh_anh: hinh_anhCreateNestedOneWithoutLuu_anhInput
  }

  export type luu_anhUncheckedCreateWithoutNguoi_dungInput = {
    hinh_id: number
    ngay_luu?: Date | string | null
  }

  export type luu_anhCreateOrConnectWithoutNguoi_dungInput = {
    where: luu_anhWhereUniqueInput
    create: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput>
  }

  export type luu_anhCreateManyNguoi_dungInputEnvelope = {
    data: luu_anhCreateManyNguoi_dungInput | luu_anhCreateManyNguoi_dungInput[]
    skipDuplicates?: boolean
  }

  export type binh_luanUpsertWithWhereUniqueWithoutNguoi_dungInput = {
    where: binh_luanWhereUniqueInput
    update: XOR<binh_luanUpdateWithoutNguoi_dungInput, binh_luanUncheckedUpdateWithoutNguoi_dungInput>
    create: XOR<binh_luanCreateWithoutNguoi_dungInput, binh_luanUncheckedCreateWithoutNguoi_dungInput>
  }

  export type binh_luanUpdateWithWhereUniqueWithoutNguoi_dungInput = {
    where: binh_luanWhereUniqueInput
    data: XOR<binh_luanUpdateWithoutNguoi_dungInput, binh_luanUncheckedUpdateWithoutNguoi_dungInput>
  }

  export type binh_luanUpdateManyWithWhereWithoutNguoi_dungInput = {
    where: binh_luanScalarWhereInput
    data: XOR<binh_luanUpdateManyMutationInput, binh_luanUncheckedUpdateManyWithoutNguoi_dungInput>
  }

  export type binh_luanScalarWhereInput = {
    AND?: binh_luanScalarWhereInput | binh_luanScalarWhereInput[]
    OR?: binh_luanScalarWhereInput[]
    NOT?: binh_luanScalarWhereInput | binh_luanScalarWhereInput[]
    binh_luan_id?: IntFilter<"binh_luan"> | number
    nguoi_dung_id?: IntNullableFilter<"binh_luan"> | number | null
    hinh_id?: IntNullableFilter<"binh_luan"> | number | null
    ngay_binh_luan?: DateTimeNullableFilter<"binh_luan"> | Date | string | null
    noi_dung?: StringNullableFilter<"binh_luan"> | string | null
  }

  export type hinh_anhUpsertWithWhereUniqueWithoutNguoi_dungInput = {
    where: hinh_anhWhereUniqueInput
    update: XOR<hinh_anhUpdateWithoutNguoi_dungInput, hinh_anhUncheckedUpdateWithoutNguoi_dungInput>
    create: XOR<hinh_anhCreateWithoutNguoi_dungInput, hinh_anhUncheckedCreateWithoutNguoi_dungInput>
  }

  export type hinh_anhUpdateWithWhereUniqueWithoutNguoi_dungInput = {
    where: hinh_anhWhereUniqueInput
    data: XOR<hinh_anhUpdateWithoutNguoi_dungInput, hinh_anhUncheckedUpdateWithoutNguoi_dungInput>
  }

  export type hinh_anhUpdateManyWithWhereWithoutNguoi_dungInput = {
    where: hinh_anhScalarWhereInput
    data: XOR<hinh_anhUpdateManyMutationInput, hinh_anhUncheckedUpdateManyWithoutNguoi_dungInput>
  }

  export type hinh_anhScalarWhereInput = {
    AND?: hinh_anhScalarWhereInput | hinh_anhScalarWhereInput[]
    OR?: hinh_anhScalarWhereInput[]
    NOT?: hinh_anhScalarWhereInput | hinh_anhScalarWhereInput[]
    hinh_id?: IntFilter<"hinh_anh"> | number
    ten_hinh?: StringNullableFilter<"hinh_anh"> | string | null
    duong_dan?: StringNullableFilter<"hinh_anh"> | string | null
    mo_ta?: StringNullableFilter<"hinh_anh"> | string | null
    nguoi_dung_id?: IntNullableFilter<"hinh_anh"> | number | null
  }

  export type luu_anhUpsertWithWhereUniqueWithoutNguoi_dungInput = {
    where: luu_anhWhereUniqueInput
    update: XOR<luu_anhUpdateWithoutNguoi_dungInput, luu_anhUncheckedUpdateWithoutNguoi_dungInput>
    create: XOR<luu_anhCreateWithoutNguoi_dungInput, luu_anhUncheckedCreateWithoutNguoi_dungInput>
  }

  export type luu_anhUpdateWithWhereUniqueWithoutNguoi_dungInput = {
    where: luu_anhWhereUniqueInput
    data: XOR<luu_anhUpdateWithoutNguoi_dungInput, luu_anhUncheckedUpdateWithoutNguoi_dungInput>
  }

  export type luu_anhUpdateManyWithWhereWithoutNguoi_dungInput = {
    where: luu_anhScalarWhereInput
    data: XOR<luu_anhUpdateManyMutationInput, luu_anhUncheckedUpdateManyWithoutNguoi_dungInput>
  }

  export type luu_anhCreateManyHinh_anhInput = {
    nguoi_dung_id: number
    ngay_luu?: Date | string | null
  }

  export type luu_anhUpdateWithoutHinh_anhInput = {
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nguoi_dung?: nguoi_dungUpdateOneRequiredWithoutLuu_anhNestedInput
  }

  export type luu_anhUncheckedUpdateWithoutHinh_anhInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type luu_anhUncheckedUpdateManyWithoutHinh_anhInput = {
    nguoi_dung_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type binh_luanCreateManyNguoi_dungInput = {
    binh_luan_id?: number
    hinh_id?: number | null
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
  }

  export type hinh_anhCreateManyNguoi_dungInput = {
    hinh_id?: number
    ten_hinh?: string | null
    duong_dan?: string | null
    mo_ta?: string | null
  }

  export type luu_anhCreateManyNguoi_dungInput = {
    hinh_id: number
    ngay_luu?: Date | string | null
  }

  export type binh_luanUpdateWithoutNguoi_dungInput = {
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type binh_luanUncheckedUpdateWithoutNguoi_dungInput = {
    binh_luan_id?: IntFieldUpdateOperationsInput | number
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type binh_luanUncheckedUpdateManyWithoutNguoi_dungInput = {
    binh_luan_id?: IntFieldUpdateOperationsInput | number
    hinh_id?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hinh_anhUpdateWithoutNguoi_dungInput = {
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    luu_anh?: luu_anhUpdateManyWithoutHinh_anhNestedInput
  }

  export type hinh_anhUncheckedUpdateWithoutNguoi_dungInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    luu_anh?: luu_anhUncheckedUpdateManyWithoutHinh_anhNestedInput
  }

  export type hinh_anhUncheckedUpdateManyWithoutNguoi_dungInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ten_hinh?: NullableStringFieldUpdateOperationsInput | string | null
    duong_dan?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type luu_anhUpdateWithoutNguoi_dungInput = {
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hinh_anh?: hinh_anhUpdateOneRequiredWithoutLuu_anhNestedInput
  }

  export type luu_anhUncheckedUpdateWithoutNguoi_dungInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type luu_anhUncheckedUpdateManyWithoutNguoi_dungInput = {
    hinh_id?: IntFieldUpdateOperationsInput | number
    ngay_luu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}