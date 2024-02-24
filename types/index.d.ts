export = StrapiEz;
declare class StrapiEz {
    tmpFilter: {};
    tmpObject: {};
    tmpKey: {};
    query: {
        filters: {};
    };
    /**
     * Set the base url for the query.
     * In case of using base url, the endpoint will be needed to the base url.
     *
     * @param {string} endpointPath The base URL to be set .
     * @returns {this}
     */
    baseURL(baseURL: any): this;
    /**
     * Set the base endpoint for the query.
     *
     * @param {string} endpointPath The endpoint to be set .
     * @returns {this}
     */
    endpoint(endpointPath: string): this;
    /**
     * Queries can accept a `fields` parameter to select only some fields. By default, only the following types of fields are returned:
     *
     * `string` types: string, text, richtext, enumeration, email, password, and uid,
     *
     * `date` types: date, time, datetime, and timestamp,
     *
     * `number` types: integer, biginteger, float, and decimal,
     *
     * `generic` types: boolean, array, and JSON.
     *
     * Field selection does not work on relational, media, component, or dynamic zone fields.
     *
     * To populate these fields, use the populate parameter.
     *
     * @param  {...string} fields
     * @returns {this}
     */
    fields(...fields: string[]): this;
    /**
     * Queries can accept a `populate` parameter to populate various field types
     * To populate children entries, populate from parent first.
     * @param  {...string} fields
     * @returns {this}
     */
    populate(...fields: string[]): this;
    /**
     * Queries can accept a `publicationState` parameter to fetch entries based on their publication state:
     *
     * `live`: returns only published entries (default)
     *
     * `preview`: returns both draft entries & published entries
     *
     * @param {("live"|"preview")} publicationState
     * @returns {this}
     */
    state(publicationState?: ("live" | "preview")): this;
    /**
     * Queries can accept a sort parameter that allows sorting on one or multiple fields.
     * The sorting order can be defined with:
     *
     * `:asc` for ascending order (default order, can be omitted)
     * or
     * `:desc` for descending order.
     *
     * example: `title:desc`
     *
     * @param  {...string} fields
     * @returns {this}
     */
    sort(...fields: string[]): this;
    /**
     * Joins the filters in an "and" expression
     *
     * @param  {...string} path
     * @returns {this}
     */
    and(...path: string[]): this;
    /**
     * Joins the filters in an "or" expression
     *
     * @param  {...string} path
     * @returns {this}
     */
    or(...path: string[]): this;
    /**
     * To paginate results by page, use the following parameters:
     *
     * @param {number} page Page number
     * @param {number} pageSize Page size
     * @param {boolean} withCount Adds the total numbers of entries and the number of pages to the response
     * @returns {this}
     */
    page(page?: number, pageSize?: number, withCount?: boolean): this;
    /**
     * To paginate results by offset, use the following parameters:
     *
     * @param {number} start Page number
     * @param {number} limit Page size
     * @param {boolean} withCount Adds the total numbers of entries and the number of pages to the response
     * @returns {this}
     */
    offset(start?: number, limit?: number, withCount?: boolean): this;
    /**
     * Equal
     *
     * @param  {...string} fields
     * @returns {this}
     */
    eq(...fields: string[]): this;
    /**
     * Equal (case-insensitive)
     *
     * @param  {...string} fields
     * @returns {this}
     */
    eqi(...fields: string[]): this;
    /**
     * Not equal
     *
     * @param  {...string} fields
     * @returns {this}
     */
    ne(...fields: string[]): this;
    /**
     * Less than
     *
     * @param  {...string} fields
     * @returns {this}
     */
    lt(...fields: string[]): this;
    /**
     * Less than or equal to
     *
     * @param  {...string} fields
     * @returns {this}
     */
    lte(...fields: string[]): this;
    /**
     * Greater than
     *
     * @param  {...string} fields
     * @returns {this}
     */
    gt(...fields: string[]): this;
    /**
     * Greater than or equal to
     *
     * @param  {...string} fields
     * @returns {this}
     */
    gte(...fields: string[]): this;
    /**
     * Included in fields
     *
     * @param  {...string} fields
     * @returns {this}
     */
    in(...fields: string[]): this;
    /**
     * Not included in fields
     *
     * @param  {...string} fields
     * @returns {this}
     */
    notIn(...fields: string[]): this;
    /**
     * Contains
     *
     * @param  {...string} fields
     * @returns {this}
     */
    contains(...fields: string[]): this;
    /**
     * Does not contain
     *
     * @param  {...string} fields
     * @returns {this}
     */
    notContains(...fields: string[]): this;
    /**
     * Contains (case-insensitive)
     *
     * @param  {...string} fields
     * @returns {this}
     */
    containsi(...fields: string[]): this;
    /**
     * Does not contain (case-insensitive)
     *
     * @param  {...string} fields
     * @returns {this}
     */
    notContainsi(...fields: string[]): this;
    /**
     * Is null
     *
     * @param  {...string} fields
     * @returns {this}
     */
    null(...fields: string[]): this;
    /**
     * Is not null
     *
     * @param  {...string} fields
     * @returns {this}
     */
    notNull(...fields: string[]): this;
    /**
     * Is between
     *
     * @param  {...string} fields
     * @returns {this}
     */
    between(...fields: string[]): this;
    /**
     * Starts with
     *
     * @param  {...string} fields
     * @returns {this}
     */
    startsWith(...fields: string[]): this;
    /**
     * Starts with (case-insensitive)
     *
     * @param  {...string} fields
     * @returns {this}
     */
    startsWithi(...fields: string[]): this;
    /**
     * Ends with
     *
     * @param  {...string} fields
     * @returns {this}
     */
    endsWith(...fields: string[]): this;
    /**
     * Ends with (case-insensitive)
     *
     * @param  {...string} fields
     * @returns {this}
     */
    endsWithi(...fields: string[]): this;
    /**
     * Get query string
     *
     * @returns {string}
     */
    get(): string;
    #private;
}
