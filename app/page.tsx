import {
  BeakerIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">Can MacBooks be used for gaming?</p>
            <p className="infoText">How does sky look line in England</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT model as you see fit</p>
            <p className="infoText">
              Messages are stored in a firebase datastore
            </p>
            <p className="infoText">
              Hot toast notifications when ChatGPT is thinking
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate false information
            </p>
            <p className="infoText">
              May occasionally produce harmful instrucitons or biased content
            </p>
            <p className="infoText">Limited knowledge of world after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
