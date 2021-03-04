import DeleteModal from './DeleteModal'

export const Static = () => {
  const onConfirm = () => {}
  const onHide = () => {}

  return (
    <DeleteModal onConfirm={onConfirm} onHide={onHide} show>
      <h4>Woah there!</h4>
      <p>
        This is a Storybook-DeleteModal. Confirming it won&apos;t really do
        anything.
      </p>
      <p>
        You can go ahead and press the Button&apos;s, though. It&apos;s kinda
        fun.
      </p>
      <p>
        Oh, and by default, DeleteModal&apos;s are static; they can only be
        closed using the X or Cancel buttons.
      </p>
    </DeleteModal>
  )
}

export const NonStatic = () => {
  const onConfirm = () => {}
  const onHide = () => {}

  return (
    <DeleteModal
      modalProps={{ backdrop: true }}
      onConfirm={onConfirm}
      onHide={onHide}
      show
    >
      <h4>Non-Static Backdrop!</h4>
      <p>
        I don&apos;t think it would be considered a dynamic backdrop. It may
        fit.
      </p>
      <p>
        Either way, this DeleteModal can be hidden by clicking its background.
        It won&apos;t work on Storybook, but you get the idea.
      </p>
    </DeleteModal>
  )
}

export const Content = () => {
  const onConfirm = () => {}
  const onHide = () => {}

  return (
    <DeleteModal
      modalProps={{ backdrop: true }}
      onConfirm={onConfirm}
      onHide={onHide}
      show
    >
      <h5 className="text-danger">
        The content of a DeleteModal can be anything <del>in the world</del>{' '}
        <ins>that is valid HTML</ins>!
      </h5>
      <p className="text-info">
        The DeleteModal will automatically remove margin from its last element,
        done to fit everything nicely in its center.
      </p>
      <p className="mb-4">
        This can be overriden using classes or styles on the last-child; like
        here.
      </p>
    </DeleteModal>
  )
}

export default { title: 'Components/DeleteModal' }
