/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.13.2.0 (NJsonSchema v10.5.2.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IAssignmentsService {
    createAssignment(createAssignmentDto: CreateAssignmentDto | null | undefined): Observable<AssignmentDto | null>;
    getAssignment(id: number): Observable<AssignmentDto | null>;
    deleteAssignment(id: number): Observable<FileResponse | null>;
    updateDoneAssignment(id: number): Observable<FileResponse | null>;
    getTypes(): Observable<TypeDto[] | null>;
    getAssignments(userParamsDto: UserParamsDto | null | undefined): Observable<AssignmentDto[] | null>;
}

@Injectable()
export class AssignmentsService implements IAssignmentsService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
        this.baseUrl = "https://localhost:5001";
    }

    createAssignment(createAssignmentDto: CreateAssignmentDto | null | undefined): Observable<AssignmentDto | null> {
        let url_ = this.baseUrl + "/api/Assignments";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(createAssignmentDto);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateAssignment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateAssignment(<any>response_);
                } catch (e) {
                    return <Observable<AssignmentDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<AssignmentDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreateAssignment(response: HttpResponseBase): Observable<AssignmentDto | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AssignmentDto>JSON.parse(_responseText, this.jsonParseReviver);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AssignmentDto | null>(<any>null);
    }

    getAssignment(id: number): Observable<AssignmentDto | null> {
        let url_ = this.baseUrl + "/api/Assignments/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAssignment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAssignment(<any>response_);
                } catch (e) {
                    return <Observable<AssignmentDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<AssignmentDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAssignment(response: HttpResponseBase): Observable<AssignmentDto | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AssignmentDto>JSON.parse(_responseText, this.jsonParseReviver);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AssignmentDto | null>(<any>null);
    }

    deleteAssignment(id: number): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Assignments/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteAssignment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteAssignment(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteAssignment(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse | null>(<any>null);
    }

    updateDoneAssignment(id: number): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Assignments/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateDoneAssignment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateDoneAssignment(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateDoneAssignment(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse | null>(<any>null);
    }

    getTypes(): Observable<TypeDto[] | null> {
        let url_ = this.baseUrl + "/api/Assignments/getTypes";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTypes(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTypes(<any>response_);
                } catch (e) {
                    return <Observable<TypeDto[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<TypeDto[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetTypes(response: HttpResponseBase): Observable<TypeDto[] | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <TypeDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<TypeDto[] | null>(<any>null);
    }

    getAssignments(userParamsDto: UserParamsDto | null | undefined): Observable<AssignmentDto[] | null> {
        let url_ = this.baseUrl + "/api/Assignments/getAssignments";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userParamsDto);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAssignments(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAssignments(<any>response_);
                } catch (e) {
                    return <Observable<AssignmentDto[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<AssignmentDto[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAssignments(response: HttpResponseBase): Observable<AssignmentDto[] | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AssignmentDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AssignmentDto[] | null>(<any>null);
    }
}

export interface AssignmentDto {
    Id: number;
    AssignmentName?: string | undefined;
    AssignmentDescription?: string | undefined;
    IsRepeated: boolean;
    StartDate: Date;
    EndDate?: Date | undefined;
    IsDone: boolean;
    AssignmentType?: string | undefined;
}

export interface CreateAssignmentDto {
    TypeId: number;
    AssignmentName: string;
    AssignmentDescription: string;
    IsRepeated: boolean;
    StartDate: Date;
    EndDate?: Date | undefined;
}

export interface TypeDto {
    Id: number;
    Name?: string | undefined;
}

export interface UserParamsDto {
    PageNumber: number;
    PageSize: number;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}