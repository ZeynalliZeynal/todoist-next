import Container from "@/components/container";

const Page = () => {
  return (
    <>
      <Container>
        <section>
          <div className="flex flex-col gap-6 items-center w-full text-center max-w-3xl mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <h1>Choose your path to productivity</h1>
              <p className="text-xl max-w-2xl text-gray-900">
                Use Todoist for free forever or upgrade to unlock our most
                powerful features for work and collaboration.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Page;
