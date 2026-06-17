import type { DocSection, DocTopic } from "@/lib/docs/types";

const theoryBeforeHeading: Record<string, DocSection> = {
  "Pillar 1 — Encapsulation: hide the internals": {
    heading: "Encapsulation — theory first",
    type: "text",
    body: `Encapsulation means an object owns its data and decides how the outside world may read or change it.

Think of it like a bank vault: customers interact through a teller window (public methods), not by walking into the vault (private fields). The vault's internal layout can change — new locks, new counting machines — as long as the window contract stays the same.

Three ideas to internalise:
  • Information hiding — callers don't need to know how balance is stored or how transactions are logged.
  • Invariants — rules like "balance never goes negative" are enforced in one place, not scattered across the app.
  • Stable API — you can refactor internals (switch List to a database) without breaking code that uses deposit() and withdraw().

In Spring Boot, encapsulation shows up everywhere: entities hide persistence details, services hide business rules, and DTOs expose only what the API should reveal.`,
  },
  "Pillar 2 — Abstraction: show what, hide how": {
    heading: "Abstraction — theory first",
    type: "text",
    body: `Abstraction is about reducing complexity by exposing a simple contract and hiding implementation detail.

You use abstractions constantly: when you call restTemplate.getForObject(), you don't care about TCP sockets or JSON parsing — you care about the result. The interface is the abstraction; the HTTP client is the implementation.

In Java, abstraction is expressed through:
  • Interfaces — pure contracts (what operations exist)
  • Abstract classes — partial implementations with shared behaviour
  • Public APIs — the surface your module exposes to others

The design question is always: "What does the caller need to know?" Everything else stays private. Good abstractions let you swap Stripe for PayPal, PostgreSQL for MongoDB, or a mock in tests — without rewriting business logic.`,
  },
  "Pillar 3 — Inheritance: share structure": {
    heading: "Inheritance — theory first",
    type: "text",
    body: `Inheritance models an IS-A relationship: a AdminUser IS-A User, a SavingsAccount IS-A BankAccount.

The child inherits fields and methods from the parent and can override behaviour. It is useful when the subtype truly is a specialised version of the parent — not when you just want to reuse some code.

Strengths:
  • Reuse common structure without duplication
  • Polymorphic collections (List<User> holding AdminUser and regular User)
  • Framework hooks (Spring's OncePerRequestFilter, JpaRepository interfaces)

Dangers (why composition often wins):
  • Deep hierarchies become hard to reason about
  • Parent changes can silently break children
  • Subclasses inherit methods they shouldn't expose (Stack extending ArrayList is a classic mistake)

Rule of thumb: if you cannot confidently say "X IS-A Y" in plain English, use composition (HAS-A) instead.`,
  },
  "Pillar 4 — Polymorphism: one interface, many forms": {
    heading: "Polymorphism — theory first",
    type: "text",
    body: `Polymorphism means "many shapes" — the same message produces different behaviour depending on the actual object type.

At runtime, Java uses dynamic dispatch: shape.area() calls Circle's area() or Rectangle's area() based on the real object, not the variable type. This is how you write code that scales when new types appear.

Why it matters for senior engineers:
  • Open for extension — add Triangle without editing the loop that sums areas
  • Kill instanceof chains — replace brittle type checks with polymorphic methods
  • Strategy pattern — plug different algorithms (payment, notification, pricing) behind one interface

In Spring, polymorphism is the default mental model: inject PaymentGateway, not StripeGateway. Your controller depends on the abstraction; Spring wires the concrete bean.`,
  },
};

function insertTheorySections(sections: DocSection[]): DocSection[] {
  const result: DocSection[] = [];

  for (const section of sections) {
    const theory = theoryBeforeHeading[section.heading];
    if (theory) {
      result.push(theory);
    }
    result.push(section);
  }

  return result;
}

export function enrichOopTopics(topics: DocTopic[]): DocTopic[] {
  return topics.map((topic) => {
    if (topic.id !== "oop") {
      return topic;
    }

    const springContext: DocSection = {
      heading: "OOP in Spring Boot — how the pillars show up",
      type: "text",
      body: `Spring Boot is an OOP framework. You see all four pillars on day one:

  • Encapsulation — @Entity fields are private; access goes through getters, services, and repositories.
  • Abstraction — Interfaces like JpaRepository<User, Long> hide SQL and connection pooling.
  • Inheritance — BaseEntity with id and timestamps; your entities extend it.
  • Polymorphism — @Autowired UserRepository works whether the runtime bean is a JDK proxy or a custom implementation.

SOLID and composition are how you keep that structure clean as the codebase grows. The code examples below show each pillar in isolation first, then in Spring-shaped designs.`,
    };

    return {
      ...topic,
      sections: [...insertTheorySections(topic.sections), springContext],
    };
  });
}
