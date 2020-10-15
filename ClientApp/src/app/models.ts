
export interface TeamSummary {
    teamId: number;
    teamName: String;
    points: number;
    transfersDone: number;
    viceCaptain: string;
    captain: string;
    rank: number;
    dayPoints: number;
    dayTransfers: number;
    dayPointsMatchNumber: number;
    dayTransfersMatchNumber: number;
  }
 
 export interface TeamDataList {
   teamId: number;
   teamName: string;
 
 }

 export interface DataResponse {
   summaryData: TeamSummary[];
   columnsList: string[];
   matchDay: number;
 }
 
 export interface IApiResponse<T> {
   messageKey: string;
   errorCode: string;
   responseType: ResponseType;
   data: T;
 }
 
 export enum ResponseType {
   error,
   success,
   fatal,
   successWithWarning
 }

 export const ApiRef = {
   // baseUrl: 'https://ipl-data.azurewebsites.net/'
    baseUrl: 'https://localhost:44327/'
 }