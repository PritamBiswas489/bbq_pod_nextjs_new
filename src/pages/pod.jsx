import Head from "next/head";

export default function PodPreviewPage() {
  return (
    <>
      <Head>
        <title>BBQ Pod Spain | Design Preview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <iframe
          src="/pod/iframe.html?model=prime&pod=p13-14&cabinet=p13-0&worktop=p14-6"
          title="BBQ Pod design preview"
          style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        />
      </main>
    </>
  );
}