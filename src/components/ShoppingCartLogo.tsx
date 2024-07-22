const cartLogo =
  '<path d="M59.07,42.015h5.32v5.32h-5.32v5.32h-5.32v-5.32h-5.32v-5.32h5.32v-5.31h5.32V42.015z M85.66,26.065v26.59h-5.32v5.32h-5.32  v5.32H32.48v5.31h-5.32v-42.54h-5.32v-5.32H11.21v-5.32h15.95v5.32h5.32v5.32H85.66z M80.34,31.385H32.48v26.59H69.7v-5.32h5.32  v-5.32h5.32V31.385z M21.84,79.245h10.64v5.32h10.63v-5.32H69.7v5.32h10.64v-5.32h5.32v-10.64h-5.32v5.32H27.16v-5.32h-5.32V79.245z  "/>';

function ShoppingCartLogo() {
  const handleClick = () => {
    window.location.href = "/cart";
  };

  return (
    <div onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cart-logo"
        viewBox="0 0 160 160"
        dangerouslySetInnerHTML={{ __html: cartLogo }}
      />
    </div>
  );
}

export default ShoppingCartLogo;
