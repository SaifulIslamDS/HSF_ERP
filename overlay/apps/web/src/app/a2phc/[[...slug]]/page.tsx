import type { Metadata } from "next";
import { A2PHCModule } from "@/components/a2phc/a2phc-module";
import { getA2PHCScreen } from "@/lib/a2phc-catalog";

type A2PHCPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: A2PHCPageProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const screen = getA2PHCScreen(slug[0]);
  return {
    title: `${screen.title} | A2PHC`,
    description: screen.description,
  };
}

export default async function A2PHCPage({ params }: A2PHCPageProps) {
  const { slug = [] } = await params;
  const screen = getA2PHCScreen(slug[0]);
  const action = slug.length > 1 ? slug.slice(1).join(" / ") : undefined;

  return action ? (
    <A2PHCModule screen={screen} action={action} />
  ) : (
    <A2PHCModule screen={screen} />
  );
}
