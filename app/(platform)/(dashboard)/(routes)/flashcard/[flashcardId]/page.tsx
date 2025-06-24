import FlashcardInterface from "@/components/flashcard-interface";

export default function FlashcardPage({
  params,
}: {
  params: { flashcardId: string };
}) {
  // You can use params.flashcardId to fetch or filter the correct flashcard
  return <FlashcardInterface flashcardId={params.flashcardId} />;
}
