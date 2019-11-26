export interface IReadIsBetweenRequest {
  accountId:string
  lowerBounds:any
  upperBounds:any
  indexName?:string
  view?:any
  lastEvaluatedKey?:any
}
