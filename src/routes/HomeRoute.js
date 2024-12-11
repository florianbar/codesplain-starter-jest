import Hero from "../components/Hero";
import RepositoriesTable from "../components/repositories/RepositoriesTable";
import useRepositories from "../hooks/useRepositories";

function HomeRoute() {
  const { data: jsRepos } = useRepositories("stars:>10000 language:javascript");
  const { data: tsRepos } = useRepositories("stars:>10000 language:typescript");
  const { data: rustRepos } = useRepositories("stars:>10000 language:rust");
  const { data: goRepos } = useRepositories("stars:>10000 language:go");
  const { data: goJava } = useRepositories("stars:>10000 language:java");
  const { data: goPython } = useRepositories("stars:>10000 language:python");

  return (
    <div>
      <Hero />
      <div className="container mx-auto py-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <RepositoriesTable
          label="Most Popular Javascript"
          repositories={jsRepos}
        />
        <RepositoriesTable
          label="Most Popular Typescript"
          repositories={tsRepos}
        />
        <RepositoriesTable label="Most Popular Rust" repositories={rustRepos} />
        <RepositoriesTable label="Most Popular Go" repositories={goRepos} />
        <RepositoriesTable label="Most Popular Java" repositories={goJava} />
        <RepositoriesTable
          label="Most Popular Python"
          repositories={goPython}
        />
      </div>
    </div>
  );
}

export default HomeRoute;