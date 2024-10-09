import Image from "next/image";
import Container from "@/components/container";
import Button from "@/components/ui/button";
import { IoLogoVercel } from "react-icons/io5";
import CollapseGroup, { Collapse } from "@/components/ui/collapse";

const Page = () => {
  return (
    <>
      <section>
        <Container>
          <div className="relative w-full h-96">
            <Image
              src="/features-teams_header-illustration.avif"
              alt="Features header"
              fill
              className="object-contain"
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex flex-col items-center gap-4 max-w-3xl text-center mx-auto">
            <h1>
              <del className="text-gray-800">Overwhelmed</del> On top of it
            </h1>
            <p className="text-xl max-w-2xl">
              Todoist makes it frictionless to get all your tasks out of your
              head and organized in one trusted place.
            </p>
            <Button
              href="/auth/register"
              rounded="full"
              size="lg"
              icon={<IoLogoVercel className="size-3.5" />}
            >
              Start for free
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid grid-cols-2 gap-12 w-full">
            <div className="flex flex-col w-[500px] place-self-center gap-8">
              <div className="space-y-8">
                <h2>Capture tasks at the speed of thought</h2>
                <p className="text-xl text-gray-900">
                  We’ve spent over a decade refining how people add tasks to
                  Todoist. Our goal? To make a to-do list that feels like a
                  natural extension of your mind.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <CollapseGroup>
                  <Collapse title="Quick add" size="sm">
                    Quick add will quickly become your superpower. Capture and
                    organize tasks the moment they come to you with
                    easy-flowing, natural language.
                  </Collapse>
                  <Collapse title="Recurring due dates" size="sm">
                    Recurring due dates like no other. Todoist’s unrivaled date
                    recognition helps you build habits and keep tabs on even the
                    trickiest of deadlines.
                  </Collapse>
                  <Collapse title="Reminders" size="sm">
                    Reminders without the clunky date pickers. Add them by
                    typing them into quick add and never worry about missing a
                    time-sensitive to-do again.
                  </Collapse>
                  <Collapse title="80+ integrations" size="sm">
                    80+ integrations mean you can turn just about anything into
                    a task from just about anywhere. Wherever your tasks come
                    from, Todoist is there too.
                  </Collapse>
                </CollapseGroup>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Page;
