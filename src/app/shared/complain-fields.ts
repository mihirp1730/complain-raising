export interface ComplainFields {
  complaintId: string;
  customerName: string;
  customerEmail: string;
  customerNumber: number;
  complainReason: string;
  otherReson?: string;
  status: string;
}

export const complainStatus = {
  Pending: 'Pending',
  Complete: 'Complete',
  New: 'New',
  Process: 'Process',
};
