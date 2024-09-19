type ListProps = {
  data: { [key: string]: string };
};

export default function List({ data }: ListProps) {
  return (
    <ul className="col-start-2 rounded p-4 bg-neutral-300">
      {Object.keys(data).map((key, index) => {
        const value = data[key];
        return (
          <li key={index}>
            {key}:
            {typeof value === "object"
              ? Object.keys(value).map((k, i) => {
                  return (
                    <ul key={k}>
                      <li className="ml-8" key={`${k}_${i}`}>
                        {k}:{" "}
                        {typeof value[k] === "object"
                          ? JSON.stringify(value[k])
                          : value[k]}
                      </li>
                    </ul>
                  );
                })
              : value}
          </li>
        );
      })}
    </ul>
  );
}
