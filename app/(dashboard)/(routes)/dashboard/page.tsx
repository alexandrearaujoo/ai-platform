import ToolsList from './components/tools-list';

export default function DashboardPage() {
  return (
    <section>
      <article className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore o poder da IA
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Bate-papo com a IA mais inteligente - Explore o poder da IA
        </p>
      </article>
      <ToolsList />
    </section>
  );
}
