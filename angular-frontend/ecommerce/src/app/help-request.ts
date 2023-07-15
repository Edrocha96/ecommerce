import { Attachments } from "./attachments";

export class HelpRequest {
    id: String = '';
    numberRequest: number = 0;
    documentNumber: String = '';
    name: String = '';
    email: String = '';
    phone: String = '';
    contactReason: String = '';
    description: String = '';
    status: String = '';
    attachments: Attachments = new Attachments;
}
