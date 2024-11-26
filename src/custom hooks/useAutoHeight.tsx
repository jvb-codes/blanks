import { useCallback, useEffect } from "react";

const useAutoHeight = (
  elementRef?: React.MutableRefObject<HTMLTextAreaElement | null>,
  dependency?: string,
  isPreviewed?: boolean
) => {
  const adjustHeight = useCallback(() => {
    if (elementRef && elementRef.current) {
      elementRef.current.style.height = "auto";
      elementRef.current.style.height = `${elementRef.current.scrollHeight}px`;
    }
  }, [elementRef]);

  useEffect(() => {
    adjustHeight();
  }, [dependency, adjustHeight, isPreviewed]);
};

export default useAutoHeight;
