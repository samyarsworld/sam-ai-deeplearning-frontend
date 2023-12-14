import PacmanLoader from "react-spinners/PacmanLoader";

interface CardProps {
  image: string;
  handleSubmit: () => void;
  loading: boolean;
  title: string;
  button: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

const Card: React.FC<CardProps> = ({
  image,
  handleSubmit,
  loading,
  title,
  button,
  handleFileChange,
  text,
}) => {
  return (
    <div className="h-[500px] w-[400px] f-col boxShadow-1">
      <div className="p-[0.5rem] w-full flex border-b border-1">{title}</div>
      <div className="f-col w-full h-full">
        <div className="w-full h-full p-[0.5rem]">
          <div className="h-[390px]">
            {loading && (
              <div className="flexCenter h-half absolute">
                <p>
                  INFERENCE STARTED:
                  <br /> Please allow around 1 minutes for the model <br /> to
                  infer
                </p>
              </div>
            )}

            {loading ? (
              <div className="flexCenter h-full">
                <PacmanLoader color={"#00A35C"} size={25} />
              </div>
            ) : image ? (
              <img
                src={image}
                className="w-full h-full object-contain"
                alt="avatar"
              />
            ) : (
              <p className="text-gray-400">{text}</p>
            )}
          </div>
        </div>
        <div className="border-t p-[0.5rem] h-[50px] border-1 regular-14">
          {title == "Image" && (
            <input
              type="file"
              className="bg-violet-200 p-1 rounded mr-4 w-[195px]"
              onChange={handleFileChange}
              name="image"
              id="image"
            />
          )}
          <button
            onClick={handleSubmit}
            className="bg-red-200 p-1 rounded min-w-[60px]"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
