import { getProviders, signIn,getCsrfToken } from "next-auth/client";

export default function SignIn({ providers ,csrfToken}) {
  return (
    <>
   
    {/* {JSON.stringify(csrfToken) } */}
      {Object.values(providers).map((provider) => (
        <form method="post" action={provider.signinUrl}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              boy {provider.name}
            </button>
          </div>
     </form>
      ))}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
        providers : await getProviders(),
        csrfToken: await getCsrfToken(context)
      }
  };
}


/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
