import type { Metadata } from "next";
import { AccessForm } from "./access-form";
import {
  getPreviewSessionHours,
  isPreviewGateConfigured,
  safeReturnTo,
} from "@/lib/preview-access";

export const metadata: Metadata = {
  title: "Authorized Access",
  description: "Authorized access to the HSF ERP management preview.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

type AccessPageProps = {
  searchParams: Promise<{
    returnTo?: string | string[];
    error?: string | string[];
  }>;
};

const ERROR_MESSAGES: Record<string, string> = {
  invalid: "The PIN is incorrect. Please check the 6 digits and try again.",
  format: "Enter exactly 6 numeric digits.",
  rate: "Too many failed attempts. Please wait a few minutes before trying again.",
};

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const params = await searchParams;
  const returnTo = safeReturnTo(first(params.returnTo));
  const errorCode = first(params.error);
  const errorMessage = errorCode ? ERROR_MESSAGES[errorCode] : undefined;

  return (
    <AccessForm
      returnTo={returnTo}
      errorMessage={errorMessage}
      configurationError={!isPreviewGateConfigured()}
      sessionHours={getPreviewSessionHours()}
    />
  );
}
