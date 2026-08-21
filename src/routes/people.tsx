import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/people")({ component: () => <div>People</div> });
