// Mock API client matching the real backend contract (backend/API-Design.md)
// When backend is ready, replace these functions with real fetch() calls

export type PrintJobStatus =
  | 'CREATED'
  | 'PAYMENT_PENDING'
  | 'PAYMENT_SUCCESS'
  | 'QUEUED'
  | 'ASSIGNED'
  | 'PRINTING'
  | 'COMPLETED'
  | 'PRINT_FAILED'
  | 'PRINT_PARTIAL'
  | 'PAYMENT_FAILED'
  | 'CANCELLED';

export interface Session {
  id: string;
  kioskId: string;
  token: string;
  expiresAt: string;
}

export interface Document {
  id: string;
  fileName: string;
  fileSize: number;
  pageCount: number;
}

export interface Quote {
  amount: number;
  currency: string;
  breakdown: {
    pageCount: number;
    pricePerPage: number;
    copies: number;
  };
}

export interface PrintJob {
  id: string;
  status: PrintJobStatus;
  documentId: string;
  config: {
    color: boolean;
    copies: number;
    duplex: boolean;
  };
  currentPage?: number;
  totalPages?: number;
}

export interface Payment {
  id: string;
  amount: number;
  gatewayUrl: string; // Redirect URL for payment
}

// ============ MOCK API FUNCTIONS ============

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function createSession(kioskQrToken: string): Promise<Session> {
  await delay(300);
  return {
    id: `session_${Date.now()}`,
    kioskId: 'kiosk_demo_001',
    token: `token_${Math.random().toString(36).substring(7)}`,
    expiresAt: new Date(Date.now() + 3600000).toISOString(),
  };
}

export async function getUploadUrl(sessionToken: string): Promise<{ uploadUrl: string; documentId: string }> {
  await delay(200);
  return {
    uploadUrl: '#mock-upload', // In real: presigned S3/MinIO URL
    documentId: `doc_${Date.now()}`,
  };
}

export async function uploadDocument(file: File): Promise<Document> {
  await delay(800); // Simulate upload
  // Mock page count detection (real backend extracts from PDF)
  const mockPageCount = Math.floor(Math.random() * 10) + 1;
  return {
    id: `doc_${Date.now()}`,
    fileName: file.name,
    fileSize: file.size,
    pageCount: mockPageCount,
  };
}

export async function getQuote(
  documentId: string,
  config: { color: boolean; copies: number; duplex: boolean }
): Promise<Quote> {
  await delay(150);
  const pageCount = 5; // Mock (real backend reads from Documents table)
  const pricePerPage = config.color ? 5.0 : 2.0;
  return {
    amount: pageCount * pricePerPage * config.copies,
    currency: '₹',
    breakdown: {
      pageCount,
      pricePerPage,
      copies: config.copies,
    },
  };
}

export async function initializePayment(
  sessionToken: string,
  documentId: string,
  config: { color: boolean; copies: number; duplex: boolean }
): Promise<Payment> {
  await delay(400);
  return {
    id: `payment_${Date.now()}`,
    amount: 25.0, // Mock
    gatewayUrl: '#mock-payment-gateway', // Real: Razorpay redirect
  };
}

export async function getPrintJobStatus(jobId: string): Promise<PrintJob> {
  await delay(200);
  // Mock status advancer (simulates Pi processing)
  const statuses: PrintJobStatus[] = ['QUEUED', 'ASSIGNED', 'PRINTING', 'COMPLETED'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  return {
    id: jobId,
    status: randomStatus,
    documentId: 'doc_mock',
    config: { color: false, copies: 1, duplex: false },
    currentPage: randomStatus === 'PRINTING' ? 2 : undefined,
    totalPages: randomStatus === 'PRINTING' ? 5 : undefined,
  };
}

// Mock: simulate payment success → job created
export async function mockPaymentSuccess(): Promise<PrintJob> {
  await delay(1000);
  return {
    id: `job_${Date.now()}`,
    status: 'QUEUED',
    documentId: 'doc_mock',
    config: { color: false, copies: 1, duplex: false },
  };
}
